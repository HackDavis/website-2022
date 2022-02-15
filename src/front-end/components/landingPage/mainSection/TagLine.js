import React, { useState, useEffect } from "react";
import styles from "../../../css/landingPage/mainSection/TagLine.module.scss";

export function TagLine() {
  const [underline, setUnderline] = useState(true);
  const [tagline, setTagline] = useState("// code for social good_");

  useEffect(() => {
    const interval = setInterval(() => {
      setUnderline((u) => !u);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (underline) {
      setTagline("// code for social good_");
    } else {
      setTagline("// code for social good");
    }
  }, [underline]);

  return (
    <section className={styles.container}>
      <h2 id="typed">{tagline}</h2>
    </section>
  );
}
