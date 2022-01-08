import React from 'react';
import styles from "../../../css/landingPage/About.module.scss";

export function About() {
    return (
        <>
            <div className={styles.top_diagonal}></div>
            <section className={styles.contents}>
                <h1>Hack for <br/> Social Good</h1>
                <p>
                    With the rapid advancement of technology, it is important 
                    to use its power in ways that benefit society. HackDavis 
                    challenges its participants to hack for social good, and 
                    create an opportunity for us to explore the intersection 
                    between technology and society.
                    <br /> <br />
                    On January 16-17, over 700 students, hackers, and creators 
                    came together virtually for 36 hours of hacking. 
                    For the 6th year in a row, we brought the most talented 
                    students in California (and beyond!) to address the world’s 
                    most pressing issues.
                </p>
            </section>
            <div className={styles.bottom_diagonal}></div>
        </>
    )
}
