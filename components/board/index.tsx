import { ReactElement, useContext, useEffect } from 'react';
import Toast from '@/components/toast';
import BoardActions from './boardActions';
import Marker from './boardMarker';
import { BoardContext } from '@/pages/let-us-play';
import { PlayerContext } from '@/pages/_app';
import { BoardType, getPlayerTwosMove, updateBoard, checkBoardForWinner, getHeading } from 'lib/board';
import styles from './board.module.scss';

interface BoardParams {
    handleCheckRecords: () => void;
    handlePlayAgain: () => void;
}

export default function Board({ handleCheckRecords, handlePlayAgain }: BoardParams) {
    const {
        board,
        winner,
        currentTurn,
        setTurn,
        setBoard,
        setPlayableSpaces,
        playableSpaces,
        setWinner,
        setWinningIDs,
    } = useContext(BoardContext);
    const { marker, setDraws, setLosses, setWins, draws, wins, losses } = useContext(PlayerContext);

    const handleWinner = (decision: { winner: string; ids: string[] }) => {
        if (typeof window !== undefined) {
            if (setWinner && setWinningIDs) {
                setWinner(decision.winner);
                setWinningIDs(decision.ids);
            }
            if (decision.winner === 'Draw' && setDraws) {
                const newDraws = draws + 1;
                setDraws(newDraws);
                localStorage.setItem('draws', newDraws.toString());
            }
            if (decision.winner !== 'Draw' && decision.winner !== marker && setLosses) {
                const newLosses = losses + 1;
                setLosses(losses + 1);
                localStorage.setItem('losses', newLosses.toString());
            } else {
                const newWins = wins + 1;
                if (setWins) setWins(newWins);
                localStorage.setItem('wins', newWins.toString());
            }
        }
    };

    const handleMark = (id: string) => {
        const updatedBoard = updateBoard(id, board, currentTurn.toLocaleUpperCase());
        if (setBoard) {
            setBoard(updatedBoard);
        }
        const updatedPlayableSpaces = playableSpaces.filter((space) => space !== id);
        if (setPlayableSpaces) {
            setPlayableSpaces(playableSpaces.filter((space) => space !== id));
        }
        const decision = checkBoardForWinner(updatedBoard, updatedPlayableSpaces.length);
        if (!decision.winner) {
            if (setTurn) setTurn(currentTurn.toLocaleUpperCase() === 'X' ? 'O' : 'X');
        } else {
            handleWinner(decision);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!winner) {
                if (currentTurn !== marker) {
                    document.getElementById(getPlayerTwosMove(playableSpaces))?.click();
                }
            }
        }, 750);

        return () => clearTimeout(timer);
    }, [currentTurn, winner]);

    const actionElement: ReactElement | null = winner ? (
        <BoardActions handleCheckRecords={handleCheckRecords} handlePlayAgain={handlePlayAgain} />
    ) : null;

    const headingContent = <h1 className="Heading_l2">{getHeading(winner, wins, losses, currentTurn, marker)}</h1>;

    return (
        <>
            <Toast />
            {headingContent}
            <section className={styles.Board} aria-label="Tic Tac Toe Board">
                {board.map((row: BoardType[]) => {
                    return row.map(({ id }: BoardType) => <Marker key={id} id={`${id}`} handleMark={handleMark} />);
                })}
            </section>
            {actionElement}
        </>
    );
}
