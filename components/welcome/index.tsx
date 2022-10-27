import { useContext } from 'react';
import Link from 'next/link';
import { PlayerContext } from '@/pages/_app';
import styles from '@/styles/welcome.module.scss';

export default function WelcomePage() {
    const { setMarker } = useContext(PlayerContext);

    const handleMarkerChoice = (marker: string) => {
        if (setMarker) setMarker(marker.toLocaleUpperCase());
        if (typeof window !== undefined) {
            localStorage.setItem('playerOne', marker.toLocaleUpperCase());
        }
    };

    return (
        <div className={styles.WelcomePage}>
            <h1 className="Heading_l1">welcome</h1>
            <h2 className="Heading_l2">pick your player</h2>
            <div className={styles.WelcomePage_Choices}>
                <button className="MarkerChoice" onClick={() => handleMarkerChoice('x')}>
                    X
                </button>
                <button className="MarkerChoice" onClick={() => handleMarkerChoice('o')}>
                    O
                </button>
            </div>
            <Link href={'/let-us-play'} passHref>
                <a className={`MatchingLink ${styles.WelcomePage_Match}`}>
                    <span className="MatchingBtn">match with my opponent</span>
                </a>
            </Link>
        </div>
    );
}
