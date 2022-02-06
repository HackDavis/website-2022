import React from "react"
// TODO: update paths and include css files 
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import styles from "../../css/aboutuspage/directors.module.css"
import Fade from "react-reveal/Fade"

const DirectorBlurb = (props) => {
	const handleClick = () => {
		window.open(props.linkedin)
	}

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
			<div className={'col-12 col-md-6 col-lg-3'} style={{marginBottom: props.sizing}}>
				<div className={styles.fadeIn}>
					<img src={props.directorImage} className={styles.headshot} onClick={handleClick}/>
					<h6 className={styles.title}><br /> {props.directorName}<br /> {checkPresident(props.directorName) ? 
						<>
							Co-President 
							<br />{props.directorDesc}
						</>
						: 
						<>
							{props.directorDesc}
						</>
						}
					</h6>
				</div>
			</div>
		</Fade>
	)
}

export default DirectorBlurb
