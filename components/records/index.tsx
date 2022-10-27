import { useContext } from 'react';
import { PlayerContext } from '@/pages/_app';
import styles from './records.module.scss';

export default function Records({
    handlePlayAgain,
    currentWinner,
}: {
    handlePlayAgain: () => void;
    currentWinner: string | null;
}) {
    const { wins, losses, draws } = useContext(PlayerContext);
    const winningTime = wins > 1 || wins === 0 ? 'times' : 'time';
    const losingTime = losses > 1 || losses === 0 ? 'times' : 'time';

    return (
        <div className={styles.Records}>
            <h1 className="Heading_l2">{currentWinner} wins!</h1>
            <p className="Heading_l2" role="alert" aria-live="assertive">
                You have won {wins} {winningTime} and lost {losses} {losingTime}. <br /> You have {draws} draws.
            </p>
            <button className="BoardActionButtons" onClick={handlePlayAgain}>
                play again
            </button>
        </div>
    );
}
