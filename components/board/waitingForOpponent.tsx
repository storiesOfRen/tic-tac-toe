import styles from './board.module.scss';
export default function WaitForOpponent() {
    return (
        <>
            <h1 className={`Heading_l2 ${styles.Waiting_Heading}`}>Waiting to find your opponent…</h1>
            <div className={styles.Waiting_Marks}>
                <span>X</span>
                <span>O</span>
            </div>
        </>
    );
}
