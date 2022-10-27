import styles from './toast.module.scss';
export default function Toast() {
    return (
        <div role="alert" aria-live="assertive" aria-atomic={true} className={styles.Toast}>
            <h2>now in game</h2>
        </div>
    );
}
