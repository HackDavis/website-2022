import React from "react";
// TODO: update paths and include css files 
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "../../css/aboutuspage/directors.module.scss";
import InstagramBlack  from "../../images/about/InstagramBlack.svg";
import LinkedInBlack from "../../images/about/LinkedInBlack.svg";
import GithubBlack  from "../../images/about/githubBlack.svg";
import Instagram  from "../../images/about/Instagram.svg";
import LinkedIn from "../../images/about/LinkedIn.svg";
import Github  from "../../images/about/github.svg";
import Fade from "react-reveal/Fade";

const DirectorBlurb = (props) => {

	const spotlightClick = (director) => {
		props.setSpotlight(director);
		
	};

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
			<div className={`${styles.container} ${props.isspotlight ? `${styles.container_spotlight}` : ""}`} style={{marginBottom: props.sizing}} onClick={() => !props.isspotlight ? spotlightClick(props.director) : ""}>
				{/* <div className={`${styles.image_wrap} ${props.isspotlight ? `${styles.image_wrap_spotlight}` : ""}`}> */}
				<div className={styles.image_wrap}>
						<img src={props.director.image} className={`${styles.headshot} ${props.isspotlight || props.ispartofspotlight ? `${styles.headshot_spotlight}` : ""}`}/>
				</div>
				<div className={styles.text_container}>
					<h6 className={`${styles.title} ${props.isspotlight ? `${styles.title_spotlight}` : ""}`}> {props.director.name} </h6>
					<div className={`${styles.icon_wrap} ${props.isspotlight ? `${styles.icons_spotlight}` : ""}`}>
						{props.director.instagram ? <a target="_blank" href={`${props.director.instagram}`}><img src={InstagramBlack} alt="Instagram" className={styles.icon}/></a> : null}
						{props.director.linkedin ? <a target="_blank" href={`${props.director.linkedin}`}><img src={LinkedInBlack} alt="LinkedIn Icon" className={styles.icon}/></a> : null}
						{props.director.github ? <a target="_blank" href={`${props.director.github}`}><img src={GithubBlack} alt="Github Icon" className={styles.icon}/></a> : null }
					</div>
				</div>
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
