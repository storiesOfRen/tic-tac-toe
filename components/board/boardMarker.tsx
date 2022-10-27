import { useState, useContext } from 'react';
import { BoardContext } from '@/pages/let-us-play';
import styles from './board.module.scss';

export default function BoardMarker({ id, handleMark }: { id: string; handleMark: (u: string) => void }) {
    const { currentTurn, winner, winningIDs } = useContext(BoardContext);
    const [mark, setMark] = useState('');

    const handleMarkAction = (id: string) => {
        setMark(currentTurn.toLocaleUpperCase());
        handleMark(id);
    };

    const markerContent = !mark ? (
        <button
            id={id}
            className={`${styles.Board_Square_btn} ${winningIDs.includes(id) ? 'Win' : ''}`}
            aria-label="make your mark"
            disabled={winner !== null}
            onClick={() => handleMarkAction(id)}
        >
            {mark}
        </button>
    ) : (
        <span id={id} className={`${styles.Board_Square_span} ${winningIDs.includes(id) ? 'Win' : ''}`}>
            {mark}
        </span>
    );

    return markerContent;
}
