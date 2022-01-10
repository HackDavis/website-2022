import React from "react";
import styles from "../css/landingPage/MainSection.module.scss";
import { MainBlock } from "../components/landingPage/mainSection/MainBlock";
import { SecondMainBlock } from "../components/landingPage/mainSection/SecondMainBlock";
import { TagLine } from "../components/landingPage/mainSection/TagLine";
import { SmallBoxes } from "../components/landingPage/mainSection/SmallBoxes";
import { Stats } from "../components/landingPage/mainSection/Stats";
import { BlockBelowStat } from "../components/landingPage/mainSection/BlockBelowStat";
import { About } from "../components/landingPage/mainSection/About";
import { LastSlantedBlock } from "../components/landingPage/mainSection/LastSlantedBlock";
import { Row, Col, Container } from "reactstrap";

export function MainSection() {
	return (
		<>
			<div className={`d-block d-sm-block d-md-block d-lg-none ${styles.container}`}>
				<MainBlock />
				<SecondMainBlock />
				<TagLine />
				<SmallBoxes />
				<Stats media="mobile" />
				<BlockBelowStat media="mobile" />
				<About media="mobile" />
				<LastSlantedBlock media="mobile" />
			</div>
			{/* Tablet, Desktop, and Laptop version */}
			<div className={`d-none d-lg-flex ${styles.non_mobile_container}`}>
				<div>
					<MainBlock />
					<SmallBoxes />
					<Stats media="non-mobile" />
					<LastSlantedBlock media="non-mobile" />
				</div>
				<div>
					<SecondMainBlock />
					<TagLine />
					{/* modified components */}
					<BlockBelowStat media="non-mobile" />
					<About media="non-mobile" />
				</div>
			</div>
		</>
	);
}
