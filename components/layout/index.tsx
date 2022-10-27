import { ReactElement } from 'react';
import Head from 'next/head';
import styles from './layout.module.scss';

export default function Layout({ children, title = '' }: { children: ReactElement | ReactElement[]; title?: string }) {
    const titleContent: string = title ? `${title} | tic-tac-toe XO` : 'tic-tac-toe XO';
    return (
        <>
            <Head>
                <title>{titleContent}</title>
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <p className="Logo">
                    tic-tac-toe <br /> <span className="Logo_XO">XO</span>
                </p>
            </header>
            <main className={styles.main}>
                <div className={styles.PageContent}>{children}</div>
            </main>
        </>
    );
}
