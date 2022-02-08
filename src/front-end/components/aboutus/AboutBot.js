import  {React, useState} from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "../../css/aboutuspage/aboutbot.module.scss";
import DirectorBlurb from "../aboutus/DirectorBlurb";
import directorInfo from "./DirectorData";
import Spotlight from "./Spotlight";

export function AboutBot() {
  // Set first person (Vivek) as the default spotlight
  const [spotlight, setSpotlight] = useState(directorInfo.vivek);
  
  function adjustSizing(index) {
    if (index == Object.keys(directorInfo).length - 1) {
      return "19rem";
    }
    return "3rem";
  }

  // function setActiveDeveloper(directorName) {
  //   setSpotlight(directorInfo.directorName)
  // }

  return (
    <>
      <div>
        <div className={styles.background}>
          <section className={styles.content}>
            <h2 className={styles.headerText}>Directors</h2>
            <p className={styles.description}>
              HackDavis is built by students, for students. Each year, we
              recruit over 30 students from UC Davis to pour hours into ensuring
              that we can host the best possible experience for hackers around
              the country.
            </p>
            <Spotlight director={spotlight}/>
            <div className={styles.directors}>
              {Object.keys(directorInfo).map((key, index) => {
                return (
                  <DirectorBlurb
                    setSpotlight={setSpotlight}
                    sizing={adjustSizing(index)}
                    director={directorInfo[key]}
                    // directorImage={directorInfo[key].image}
                    // directorName={directorInfo[key].name}
                    // directorDesc={directorInfo[key].description}
                    // linkedin={directorInfo[key].linkedin}
                    // add onClick function that calls local function that sets setSpotlight to current director
                    // onClick={() => setActiveDeveloper(directorInfo[key].name)}
                  ></DirectorBlurb>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
