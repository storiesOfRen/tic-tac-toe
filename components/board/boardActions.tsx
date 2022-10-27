export default function BoardActions({
    handleCheckRecords,
    handlePlayAgain,
}: {
    handleCheckRecords: () => void;
    handlePlayAgain: () => void;
}) {
    return (
        <span>
            <button className="BoardActionButtons" onClick={handlePlayAgain}>
                play again
            </button>
            <button className="BoardActionButtons" onClick={handleCheckRecords}>
                see record
            </button>
        </span>
    );
}
