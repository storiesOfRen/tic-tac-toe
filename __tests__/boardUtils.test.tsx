import {
    getPlayerTwosMove,
    initialBoard,
    playableAreas,
    updateBoard,
    getHeading,
    checkBoardForWinner,
} from '@/lib/board';
import { testBoard1, testBoard2, testBoardRow, testBoardCol, testBoardULBR, testBoardURBL } from '@/lib/testData';

describe('getPlayerTwosMove', () => {
    it('getPlayerTwosMove returns a string until there are no playable spaces anymore', () => {
        let playableSpaces = [...playableAreas];
        const result = getPlayerTwosMove(playableSpaces);
        expect(result).toBeDefined();
        playableSpaces = [];
        const noMoreSpaces = getPlayerTwosMove(playableSpaces);
        expect(noMoreSpaces).toBeUndefined();
    });
});

describe('updateBoard', () => {
    it('updates spaces on the board', () => {
        expect(initialBoard[0][0].mark).toEqual('');
        const updatedBaord = updateBoard('0', initialBoard, 'X');
        expect(updatedBaord[0][0].mark).toEqual('X');
    });
});

describe('getHeading', () => {
    it('returns appropriate heading content', () => {
        expect(getHeading(null, 1, 2, 'O', 'X')).toEqual("O's turn!");
        expect(getHeading('X', 1, 0, 'X', 'X')).toEqual('X wins!');
        expect(getHeading('O', 1, 2, 'O', 'X')).toEqual('O wins again!');
        expect(getHeading('Draw', 1, 2, 'O', 'X')).toEqual("It's a draw.");
    });
});

describe('checkBoardForWinner', () => {
    it('if no winner found and board is not full should return an empty string', () => {
        expect(checkBoardForWinner(testBoard1, 7).winner).toEqual('');
    });

    it('if no winner found and board is full should return Draw', () => {
        expect(checkBoardForWinner(testBoard2, 0).winner).toEqual('Draw');
    });

    it('if winner found: Row', () => {
        expect(checkBoardForWinner(testBoardRow, 4).winner).toEqual('X');
    });

    it('if winner found: Col', () => {
        expect(checkBoardForWinner(testBoardCol, 4).winner).toEqual('O');
    });

    it('if winner found: Cross Upper Left -> Bottom Right', () => {
        expect(checkBoardForWinner(testBoardULBR, 3).winner).toEqual('X');
    });

    it('if winner found: Cross Upper Right -> Bottom Left', () => {
        expect(checkBoardForWinner(testBoardURBL, 3).winner).toEqual('X');
    });
});
