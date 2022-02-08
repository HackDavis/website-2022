import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "../../css/aboutuspage/aboutbot.module.scss";
import DirectorBlurb from "../aboutus/DirectorBlurb";
import Abhishek from "../../images/headshots/Abhishek.png";
import Alec from "../../images/headshots/Alec.jpg";
import Alex from "../../images/headshots/Alex.jpg";
import Alyson from "../../images/headshots/Alyson.png";
import Andy from "../../images/headshots/Andy.jpg";
import Ashwin from "../../images/headshots/Ashwin.jpg";
import Calla from "../../images/headshots/Calla.jpg";
import Cameron from "../../images/headshots/Cameron.jpg";
import Chelsea from "../../images/headshots/Chelsea.jpg";
import Cheryl from "../../images/headshots/Cheryl.jpg";
import Daphne from "../../images/headshots/Daphne.jpg";
import Eric from "../../images/headshots/Eric.jpg";
import Eugenia from "../../images/headshots/Eugenia.png";
import Eva from "../../images/headshots/Eva.jpg";
import Ishani from "../../images/headshots/Ishani.png";
import Jonny from "../../images/headshots/Jonny.jpg";
import Joyce from "../../images/headshots/Joyce.jpg";
import Justin from "../../images/headshots/Justin.jpg";
import Matt from "../../images/headshots/Matt.jpg";
import Miles from "../../images/headshots/Miles.jpg";
import Rachel from "../../images/headshots/rachel.jpeg";
import Shelly from "../../images/headshots/Shelly.jpg";
import Shounak from "../../images/headshots/Shounak.JPG";
import Sivani from "../../images/headshots/Sivani.JPG";
import Sriya from "../../images/headshots/Sriya.jpg";
import Stephenie from "../../images/headshots/Stephenie.jpg";
import Takumi from "../../images/headshots/Takumi.jpg";
import Vivek from "../../images/headshots/Vivek.JPG";
import Willie from "../../images/headshots/Willie.jpg";
import Fajar from "../../images/headshots/Fajar.JPG";
import Jennifer from "../../images/headshots/Jennifer.jpg";
import Trishna from "../../images/headshots/Trishna.jpg";
import Zaynah from "../../images/headshots/Zaynah.jpg";
import Arjun from "../../images/headshots/Arjun.jpg";
import Hanah from "../../images/headshots/Hanah.jpg";

export function AboutBot() {
  const directorInfo = {
    vivek: {
      name: "Vivek",
      description: `Sponsorship Lead`,
      linkedin: `https://www.linkedin.com/in/vivekshome/`,
      image: Vivek
    },
    cheryl: {
      name: "Cheryl",
      description: `Design Lead`,
      linkedin: `https://www.linkedin.com/in/cherylcai/`,
      image: Cheryl
    },
    stephenie: {
      name: "Stephenie",
      description: `Finance Lead`,
      linkedin: `https://www.linkedin.com/in/stepheniecho/`,
      image: Stephenie
    },
    joyce: {
      name: "Joyce",
      description: `External Lead`,
      linkedin: `https://www.linkedin.com/in/joycelu17/`,
      image: Joyce
    },
    abhishek: {
      name: "Abhishek",
      description: `Operations Co-Lead`,
      linkedin: `https://www.linkedin.com/in/abhishekhandigol/`,
      image: Abhishek
    },
    ishani: {
      name: "Ishani",
      description: `Operations Co-Lead`,
      linkedin: `https://www.linkedin.com/in/ishani-pandya/`,
      image: Ishani
    },
    alex: {
      name: "Alex",
      description: `Technical Co-Lead`,
      linkedin: `https://www.linkedin.com/in/alelong/`,
      image: Alex
    },
    justin: {
      name: "Justin",
      description: `Technical Co-Lead`,
      linkedin: `https://www.linkedin.com/in/justin-godfrey-rusit-5a2327196/`,
      image: Justin
    },
    trishna: {
      name: "Trishna",
      description: `Technical`,
      linkedin: `https://www.linkedin.com/in/trishnasharma/`,
      image: Trishna
    },
    sivani: {
      name: "Sivani",
      description: `Sponsorship`,
      linkedin: `https://www.linkedin.com/in/sivani-voruganti/`,
      image: Sivani
    },
    eva: {
      name: "Eva",
      description: `Sponsorship`,
      linkedin: `http://linkedin.com/in/eva-y-chen`,
      image: Eva
    },
    rachel: {
      name: "Rachel",
      description: `Design`,
      linkedin: `https://www.linkedin.com/in/rachelyapp/`,
      image: Rachel
    },
    fajar: {
      name: "Fajar",
      description: `Design`,
      linkedin: `https://www.linkedin.com/in/fajar-akhter/`,
      image: Fajar
    },
    alyson: {
      name: "Alyson",
      description: `Finance`,
      linkedin: `https://www.linkedin.com/in/alyson-lee-5214501b4/`,
      image: Alyson
    },
    jonny: {
      name: "Jonny",
      description: `Finance`,
      linkedin: `http://www.linkedin.com/in/jonny-shen`,
      image: Jonny
    },
    shounak: {
      name: "Shounak",
      description: `External`,
      linkedin: `https://www.linkedin.com/in/shounakranabhor`,
      image: Shounak
    },
    jennifer: {
      name: "Jennifer",
      description: `Marketing`,
      linkedin: `http://www.linkedin.com/in/jenniferfrey02`,
      image: Jennifer
    },
    ashwin: {
      name: "Ashwin",
      description: `Operations`,
      linkedin: `https://www.linkedin.com/in/ashwin-ramakrishna-5713a51b7/`,
      image: Ashwin
    },
    eugenia: {
      name: "Eugenia",
      description: `Operations`,
      linkedin: `https://www.linkedin.com/in/eugenia-zhang1`,
      image: Eugenia
    },
    sriya: {
      name: "Sriya",
      description: `Operations`,
      linkedin: `https://www.linkedin.com/in/saisriyamudigonda/`,
      image: Sriya
    },
    alec: {
      name: "Alec",
      description: `Technical`,
      image: Alec
    },
    cameron: {
      name: "Cameron",
      description: `Technical`,
      linkedin: `https://www.linkedin.com/in/cam-yee/`,
      image: Cameron
    },
    eric: {
      name: "Eric",
      description: `Technical`,
      image: Eric
    },
    miles: {
      name: "Miles",
      description: `Finance`,
      image: Miles
    },
    andy: {
      name: "Andy",
      description: `Design`,
      image: Andy
    },
    chelsea: {
      name: "Chelsea",
      description: `External`,
      image: Chelsea
    },
    daphne: {
      name: "Daphne",
      description: `Sponsorship`,
      image: Daphne
    },
    matt: {
      name: "Matt",
      description: `Finance`,
      image: Matt
    },
    shelly: {
      name: "Shelly",
      description: `Sponsorship`,
      image: Shelly
    },
    takumi: {
      name: "Takumi",
      description: `External`,
      image: Takumi
    },
    arjun: {
      name: "Arjun",
      description: `Marketing`,
      image: Arjun
    },
    zaynah: {
      name: "Zaynah",
      description: `Marketing`,
      image: Zaynah
    },
    calla: {
      name: "Calla",
      description: `Marketing`,
      image: Calla
    },
    hanah: {
      name: "Hanah",
      description: `Marketing`,
      image: Hanah
    },
    willie: {
      name: "Willie",
      description: `External`,
      image: Willie
    }
  };
  function adjustSizing(index) {
    if (index == Object.keys(directorInfo).length - 1) {
      return "19rem";
    }
    return "3rem";
  }
  return (
    <>
      <div className="container-fluid p-0">
        <div className={`row no-gutters ${styles.background}`}>
          <div className={"col-10 col-md-8 offset-1 offset-md-2"}>
            <div className={styles.headerText}>Directors</div>
            <div className={styles.description}>
              HackDavis is built by students, for students. Each year, we
              recruit over 30 students from UC Davis to pour hours into ensuring
              that we can host the best possible experience for hackers around
              the country.
            </div>
            <div className={`row no-gutters`}>
              {Object.keys(directorInfo).map((key, index) => {
                return (
                  <DirectorBlurb
                    sizing={adjustSizing(index)}
                    directorImage={directorInfo[key].image}
                    directorName={directorInfo[key].name}
                    directorDesc={directorInfo[key].description}
                    linkedin={directorInfo[key].linkedin}
                  ></DirectorBlurb>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
