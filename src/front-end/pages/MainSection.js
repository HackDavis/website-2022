import React from "react";
import styles from "../css/landingPage/MainSection.module.scss";
import { MainBlock } from "../components/landingPage/mainSection/MainBlock";
import { FlyingAnimals } from "../components/landingPage/mainSection/FlyingAnimals";
import { TagLine } from "../components/landingPage/mainSection/TagLine";
import { AnimalSpotlight } from "../components/landingPage/mainSection/AnimalSpotlight";
import { Stats } from "../components/landingPage/mainSection/Stats";
import { BlockBelowStat } from "../components/landingPage/mainSection/BlockBelowStat";
import { About } from "../components/landingPage/mainSection/About";
import { LastSlantedBlock } from "../components/landingPage/mainSection/LastSlantedBlock";

export function MainSection() {
	return (
		<>
			<div className={`d-block d-sm-block d-md-block d-lg-none ${styles.container}`}>
				<MainBlock />
				<FlyingAnimals/>
				<TagLine />
				<AnimalSpotlight/>
				<Stats/>
				<BlockBelowStat/>
				<About/>
				<LastSlantedBlock/>
			</div>
			{/* Tablet, Desktop, and Laptop version */}
			<div className={`d-none d-lg-flex ${styles.non_mobile_container}`}>
				<div>
					<MainBlock />
					<AnimalSpotlight/>
					<Stats/>
					<LastSlantedBlock/>
				</div>
				<div>
					<FlyingAnimals/>
					<TagLine />
					{/* modified components */}
					<BlockBelowStat/>
					<About/>
				</div>
			</div>
		</>
	);
}
