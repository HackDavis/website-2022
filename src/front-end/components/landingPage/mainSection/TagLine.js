import React, { useState, useEffect } from "react";
import styles from "../../../css/landingPage/mainSection/TagLine.module.scss";
// import Typed from "typed.js";

export function TagLine() {
  const [underline, setUnderline] = useState(true)
  const [tagline, setTagline] = useState("// code for social good_")

  useEffect(() => {
    const interval = setInterval(() => {
      setUnderline((u) => !u)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (underline) {
      setTagline("// code for social good_")
    } else {
      setTagline("// code for social good")
    }
  }, [underline])
  
  // let typed;
  // useEffect(() => {
  //   // set typed
  //   typed = new Typed("#typed", {
  //       strings: ["// code for social good"],
  //       typeSpeed: 30,
  //       backSpeed: 30,
  //       backDelay: 3500,
  //       startDelay: 1000,
  //       fadeOut: false,
  //       loop: true,
  //       shuffle: false,
  //   })
  //    // Cleanup event handlers
  //    return () => {
  //     // clean up the event handler when the component unmounts
  //     typed.destroy()
  //   }
  // })

  return (
    <section className={styles.container}>
      <h2 id="typed">{tagline}</h2>
    </section>
  );
}
