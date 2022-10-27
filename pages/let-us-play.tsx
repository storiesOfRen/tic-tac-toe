import { useEffect, useState, createContext } from 'react';
import Layout from '@/components/layout';
import Board from '@/components/board';
import Records from '@/components/records';
import WaitForOpponent from '@/components/board/waitingForOpponent';
import { initialBoard, BoardType, playableAreas } from '../lib/board';
import styles from '../styles/boardPage.module.scss';

interface BoardInterface {
    board: BoardType[][];
    setBoard?: (board: BoardType[][]) => void;
    winner: string | null;
    setWinner?: (winner: string | null) => void;
    currentTurn: string;
    setTurn?: (turn: string) => void;
    playableSpaces: string[];
    setPlayableSpaces?: (areas: string[]) => void;
    winningIDs: string[];
    setWinningIDs?: (ids: string[]) => void;
}

export const BoardContext = createContext<BoardInterface>({
    board: initialBoard,
    winner: null,
    currentTurn: 'X',
    playableSpaces: playableAreas,
    winningIDs: [],
});

export default function GameBoard() {
    const [title, setTitle] = useState('Waiting to find your opponent');
    const [waiting, setWaiting] = useState(true);
    const [checkRecords, setCheckRecords] = useState(false);
    // Context State Values
    const [winner, setWinner] = useState<string | null>(null);
    const [board, setBoard] = useState<BoardType[][]>(initialBoard);
    const [currentTurn, setTurn] = useState<string>('X');
    const [playableSpaces, setPlayableSpaces] = useState<string[]>(playableAreas);
    const [winningIDs, setWinningIDs] = useState<string[]>([]);

    const BoardState = {
        board,
        setBoard,
        winner,
        setWinner,
        currentTurn,
        setTurn,
        playableSpaces,
        setPlayableSpaces,
        winningIDs,
        setWinningIDs,
    };

    const handleCheckRecords = () => setCheckRecords(!checkRecords);
    const handlePlayAgain = () => {
        setCheckRecords(false);
        setWinner(null);
        setBoard(initialBoard);
        setPlayableSpaces(playableAreas);
        setTurn('X');
        setWaiting(true);
        setWinningIDs([]);
    };

    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;
        if (waiting) {
            timer = setTimeout(() => {
                setTitle('Now in Game');
                setWaiting(false);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [waiting]);

    const content = waiting ? (
        <WaitForOpponent />
    ) : (
        <Board handleCheckRecords={handleCheckRecords} handlePlayAgain={handlePlayAgain} />
    );
    const pageContent = checkRecords ? (
        <Records handlePlayAgain={handlePlayAgain} currentWinner={winner} />
    ) : (
        <>{content}</>
    );

    return (
        <Layout title={title}>
            <BoardContext.Provider value={BoardState}>
                <div className={styles.BoardPage}>{pageContent}</div>
            </BoardContext.Provider>
        </Layout>
    );
}
