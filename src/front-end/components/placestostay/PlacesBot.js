import  {React, useState, useRef} from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "../../css/placestostay/placesbot.module.scss";
import HotelBlurb from "../placestostay/HotelBlurb";
import hotelInfo from "./Data";
import Spotlight from "./Spotlight";

export function PlacesBot({ myReference }) {
  // Set first person (Vivek) as the default spotlight
  const [spotlight, setSpotlight] = useState(hotelInfo.AggieInn);
  
  function adjustSizing(index) {
    if (index == Object.keys(hotelInfo).length - 1) {
      return "19rem";
    }
    return "3rem";
  }

  // function setActiveDeveloper(directorName) {
  //   setSpotlight(hotelInfo.directorName)
  // }

  return (
    <>
      <div>
        <div className={styles.background}>
          <section className={styles.content}>
            <hr ref={myReference} />
            {/* <Spotlight director={spotlight}/> */}
            <div className={styles.directors}>
              {Object.keys(hotelInfo).map((key, index) => {
                return (
                  <HotelBlurb
                    key={key}
                    // myReference={myReference}
                    // setSpotlight={setSpotlight}
                    sizing={adjustSizing(index)}
                    director={hotelInfo[key]}
                    // isspotlight={false}
                    // ispartofspotlight={spotlight.name === hotelInfo[key].name ? true : false}
                  ></HotelBlurb>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
