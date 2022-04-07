import React from "react";
import styles from "../css/landingPage/MainSection.module.scss";
import { MainBlock } from "../components/landingPage/mainSection/MainBlock";
import {Timer} from "../components/doe/Timer";
import { Location } from "../components/doe/Location";
import { FlyingAnimals } from "../components/landingPage/mainSection/FlyingAnimals";
import { TagLine } from "../components/landingPage/mainSection/TagLine";
import { AnimalSpotlight } from "../components/landingPage/mainSection/AnimalSpotlight";
import { Stats } from "../components/landingPage/mainSection/Stats";
import { TreeTop } from "../components/landingPage/mainSection/TreeTop";
import { About } from "../components/landingPage/mainSection/About";
import { CowHeart } from "../components/landingPage/mainSection/CowHeart";
import { Discord } from "front-end/components/doe/Discord";
import { Prizes } from "front-end/components/doe/Prizes";

export function MainSection() {
	return (
		<>
			{/* mobile */}
			<div className={`d-flex d-sm-flex d-md-flex d-lg-none ${styles.container}`}>
				<Timer />
				<Location />
				<TagLine />
				<Discord />
				<TreeTop />
				<CowHeart />
				<Prizes />
			</div>
			
			{/* tablet, desktop */}
			<div className={`d-none d-lg-flex ${styles.non_mobile_container}`}>
				
			</div>
		</>
	);


	// return (
	// 	<>
	// <div className={`d-flex d-sm-flex d-md-flex d-lg-none ${styles.container}`}>
	// 			<MainBlock />
	// 			<FlyingAnimals/>
	// 			<TagLine />
	// 			<AnimalSpotlight/>
	// 			<Stats/>
	// 			<TreeTop/>
	// 			<About/>
	// 			<CowHeart/>
	// 		</div>
	// 		{/* Tablet, Desktop, and Laptop version */}
	// 		<div className={`d-none d-lg-flex ${styles.non_mobile_container}`}>
	// 			<div>
	// 				<MainBlock />
	// 				<AnimalSpotlight/>
	// 				<Stats/>
	// 				<CowHeart/>
	// 			</div>
	// 			<div>
	// 				<FlyingAnimals/>
	// 				<TagLine />
	// 				{/* modified components */}
	// 				<TreeTop/>
	// 				<About/>
	// 			</div>
	// 		</div>
	// 	</>
	// );
}
