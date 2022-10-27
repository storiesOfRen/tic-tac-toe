export type BoardType = {
    id: string;
    mark: string;
};

export const initialBoard: BoardType[][] = [
    [
        { id: '0', mark: '' },
        { id: '1', mark: '' },
        { id: '2', mark: '' },
    ],
    [
        { id: '3', mark: '' },
        { id: '4', mark: '' },
        { id: '5', mark: '' },
    ],
    [
        { id: '6', mark: '' },
        { id: '7', mark: '' },
        { id: '8', mark: '' },
    ],
];

export const playableAreas = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

export const getPlayerTwosMove = (playableSpaces: string[]) => {
    const idx = Math.floor(Math.random() * playableSpaces.length);
    return playableSpaces[idx];
};

export const updateBoard = (id: string, board: BoardType[][], mark: string) => {
    return board.map((spaces: BoardType[]) => {
        return spaces.map((space: BoardType) => {
            return space.id === id ? { ...space, mark } : space;
        });
    });
};

export const getHeading = (
    winner: string | null,
    wins: number,
    losses: number,
    currentTurn: string,
    marker: string
): string => {
    let heading = `${currentTurn}'s turn!`;

    if (winner) {
        switch (true) {
            case winner === 'Draw': {
                heading = `It's a draw.`;
                break;
            }
            case winner !== marker && winner !== 'Draw' && losses > 1: {
                heading = `${winner} wins again!`;
                break;
            }
            case winner === marker && wins > 1: {
                heading = `${winner} wins again!`;
                break;
            }
            default: {
                heading = `${winner} wins!`;
                break;
            }
        }
    }
    return heading;
};

const checkRows = (board: BoardType[][], decision: { winner: string; ids: string[] }) => {
    for (const element of board) {
        if (!element[0].mark && !element[1].mark && !element[2].mark) continue;
        if (element[0].mark === element[1].mark && element[0].mark === element[2].mark) {
            decision.winner = element[0].mark;
            decision.ids = [element[0].id, element[1].id, element[2].id];
            break;
        }
    }
};

const checkCols = (board: BoardType[][], decision: { winner: string; ids: string[] }) => {
    if (!decision.winner) {
        for (let i = 0; i < board[0].length; i++) {
            if (!board[0][i].mark && !board[1][i].mark && !board[2][i].mark) continue;
            if (board[0][i].mark === board[1][i].mark && board[0][i].mark === board[2][i].mark) {
                decision.winner = board[0][i].mark;
                decision.ids = [board[0][i].id, board[1][i].id, board[2][i].id];
                break;
            }
        }
    }
};

const checkDiagonals = (board: BoardType[][], decision: { winner: string; ids: string[] }) => {
    const middleSquare = board[1][1];
    // upper left corner to bottom right
    if (
        (board[0][0].mark || middleSquare.mark || board[2][2].mark) &&
        board[0][0].mark === middleSquare.mark &&
        middleSquare.mark === board[2][2].mark &&
        !decision.winner
    ) {
        decision.winner = board[0][0].mark;
        decision.ids = [board[0][0].id, middleSquare.id, board[2][2].id];
    }
    // upper right corner to bottom left
    if (
        (board[0][2].mark || middleSquare.mark || board[2][0].mark) &&
        board[0][2].mark === middleSquare.mark &&
        middleSquare.mark === board[2][0].mark &&
        !decision.winner
    ) {
        decision.winner = board[0][2].mark;
        decision.ids = [board[0][2].id, middleSquare.id, board[2][0].id];
    }
};

export const checkBoardForWinner = (board: BoardType[][], playableSpaces: number) => {
    const decision: { winner: string; ids: string[] } = { winner: '', ids: [] };
    checkRows(board, decision);
    checkCols(board, decision);
    checkDiagonals(board, decision);
    if (playableSpaces === 0 && !decision.winner) {
        decision.winner = 'Draw';
        decision.ids = [];
    }
    return decision;
};
