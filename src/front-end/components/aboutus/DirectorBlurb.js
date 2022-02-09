import React from "react";
// TODO: update paths and include css files 
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "../../css/aboutuspage/directors.module.scss";
import Fade from "react-reveal/Fade";

const DirectorBlurb = (props) => {

	const checkPresident = (name) => {
		if ((name === 'Ishani') || (name === 'Vivek')) {
			return true;
		}
		else {
			return false;
		}
	};

	return (
		<Fade>
			<div className={`${styles.container} ${props.isspotlight ? `${styles.container_spotlight}` : ""}`} style={{marginBottom: props.sizing}} onClick={() => props.setSpotlight(props.director)}>
				{/* <div className={`${styles.image_wrap} ${props.isspotlight ? `${styles.image_wrap_spotlight}` : ""}`}> */}
				<div className={styles.image_wrap}>
						<img src={props.director.image} className={`${styles.headshot} ${props.isspotlight || props.ispartofspotlight ? `${styles.headshot_spotlight}` : ""}`}/>
				</div>
				<h6 className={`${styles.title} ${props.isspotlight ? `${styles.title_spotlight}` : ""}`}><br /> {props.director.name} </h6>
				<h6 className={`${styles.text} ${props.isspotlight ? `${styles.text_spotlight}` : ""}`}>
				{checkPresident(props.director.name) ? 
					<>
						Co-President 
						<br />{props.director.description}
					</>
					: 
					<>
						{props.director.description}
					</>
					}
				</h6>
			</div>
		</Fade>
	);
};

export default DirectorBlurb;
