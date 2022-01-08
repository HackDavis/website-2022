import React from 'react'
import styles from "../../../css/landingPage/Stats.module.scss";

export function Stats() {
    return (
        <>
            <section className={styles.container}>
                <h1>
                    700+ hackers
                    <br/>
                    36 hours
                    <br/>
                    140+ projects 
                    <br/>
                    &#36;15,000+ prizes
                </h1>
                <button>VIEW 2021 WINNERS</button>
            </section>
            <div className={styles.bottom_diagonal}></div>
        </>
    )
}
