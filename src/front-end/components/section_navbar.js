import Section_Mobile_Navbar from "./section_mobile_navbar.js";
import Section_Desktop_Navbar from "./section_desktop_navbar.js";
import styles from '../css/section_navbar.module.scss';

const Section_Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mobile}>
                <Section_Mobile_Navbar/>
            </div>
            <div className={styles.desktop}>
                <Section_Desktop_Navbar/>
            </div>
        </div>
    )
}

export default Section_Navbar;