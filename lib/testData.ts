import { BoardType } from './board';
// Test Data
export const testBoard1: BoardType[][] = [
    [
        { id: '0', mark: '' },
        { id: '1', mark: 'X' },
        { id: '2', mark: '' },
    ],
    [
        { id: '3', mark: '' },
        { id: '4', mark: 'O' },
        { id: '5', mark: '' },
    ],
    [
        { id: '6', mark: '' },
        { id: '7', mark: '' },
        { id: '8', mark: '' },
    ],
];
export const testBoard2: BoardType[][] = [
    [
        { id: '0', mark: 'O' },
        { id: '1', mark: 'X' },
        { id: '2', mark: 'O' },
    ],
    [
        { id: '3', mark: 'O' },
        { id: '4', mark: 'X' },
        { id: '5', mark: 'X' },
    ],
    [
        { id: '6', mark: 'X' },
        { id: '7', mark: 'O' },
        { id: '8', mark: 'X' },
    ],
];
export const testBoardRow: BoardType[][] = [
    [
        { id: '0', mark: 'X' },
        { id: '1', mark: 'X' },
        { id: '2', mark: 'X' },
    ],
    [
        { id: '3', mark: '' },
        { id: '4', mark: 'O' },
        { id: '5', mark: '' },
    ],
    [
        { id: '6', mark: '' },
        { id: '7', mark: '' },
        { id: '8', mark: 'O' },
    ],
];
export const testBoardCol: BoardType[][] = [
    [
        { id: '0', mark: 'X' },
        { id: '1', mark: 'O' },
        { id: '2', mark: '' },
    ],
    [
        { id: '3', mark: '' },
        { id: '4', mark: 'O' },
        { id: '5', mark: 'X' },
    ],
    [
        { id: '6', mark: '' },
        { id: '7', mark: 'O' },
        { id: '8', mark: 'X' },
    ],
];
export const testBoardULBR: BoardType[][] = [
    [
        { id: '0', mark: 'X' },
        { id: '1', mark: 'O' },
        { id: '2', mark: '' },
    ],
    [
        { id: '3', mark: '' },
        { id: '4', mark: 'X' },
        { id: '5', mark: 'O' },
    ],
    [
        { id: '6', mark: '' },
        { id: '7', mark: 'O' },
        { id: '8', mark: 'X' },
    ],
];
export const testBoardURBL: BoardType[][] = [
    [
        { id: '0', mark: '' },
        { id: '1', mark: 'O' },
        { id: '2', mark: 'X' },
    ],
    [
        { id: '3', mark: '' },
        { id: '4', mark: 'X' },
        { id: '5', mark: 'O' },
    ],
    [
        { id: '6', mark: 'X' },
        { id: '7', mark: 'O' },
        { id: '8', mark: '' },
    ],
];
