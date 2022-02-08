import React from "react"
// TODO: update paths and include css files 
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import styles from "../../css/aboutuspage/directors.module.scss"
import Fade from "react-reveal/Fade"

const DirectorBlurb = (props) => {

	const checkPresident = (name) => {
		if ((name === 'Ishani') || (name === 'Vivek')) {
			return true
		}
		else {
			return false
		}
	}

	return (
		<Fade>
			<div className={styles.container} style={{marginBottom: props.sizing}} onClick={() => {props.setSpotlight(props.director)}}>
				<div className={styles.image_wrap}>
						<img src={props.director.image} className={styles.headshot}/>
				</div>
				<h6 className={styles.title}><br /> {props.director.name} </h6>
				<h6 className={styles.text}>
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
	)
}

export default DirectorBlurb
