import { createContext, useEffect, useState } from 'react';

import type { AppProps } from 'next/app';
import '../styles/globals.scss';

interface PlayerOneInterface {
    marker: string;
    setMarker?: (u: string) => void;
    wins: number;
    setWins?: (u: number) => void;
    losses: number;
    setLosses?: (u: number) => void;
    draws: number;
    setDraws?: (u: number) => void;
}

export const PlayerContext = createContext<PlayerOneInterface>({
    marker: '',
    wins: 0,
    losses: 0,
    draws: 0,
});

function MyApp({ Component, pageProps }: AppProps) {
    // Context State Values
    const [marker, setMarker] = useState<string>('');
    const [wins, setWins] = useState<number>(0);
    const [losses, setLosses] = useState<number>(0);
    const [draws, setDraws] = useState<number>(0);
    const PlayerOne = { marker, setMarker, wins, setWins, losses, setLosses, draws, setDraws };

    useEffect(() => {
        const mark = localStorage.getItem('playerOne');
        const losses = localStorage.getItem('losses');
        const wins = localStorage.getItem('wins');
        const draws = localStorage.getItem('draws');
        if (mark) setMarker(mark);
        if (losses) setLosses(Number(losses));
        if (wins) setLosses(Number(wins));
        if (draws) setLosses(Number(draws));
    }, []);

    return (
        <PlayerContext.Provider value={PlayerOne}>
            <Component {...pageProps} />
        </PlayerContext.Provider>
    );
}

export default MyApp;
