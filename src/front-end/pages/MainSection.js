import React from "react";
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
    <Container fluid>
			<Row>
				{/* Mobile version */}
				<Col xs="12" md="0" className="d-block d-sm-block d-md-none">
					<MainBlock />
					<SecondMainBlock />
					<TagLine />
					<SmallBoxes />
					<Stats media="mobile" />
					<BlockBelowStat media="mobile" />
					<About media="mobile" />
					<LastSlantedBlock media="mobile" />
				</Col>
				{/* Tablet, Desktop, and Laptop version */}
				<Col md="5" className="d-none d-md-block">
					<MainBlock />
					<SmallBoxes />
					<Stats media="non-mobile" />
					<LastSlantedBlock media="non-mobile" />
				</Col>
				<Col md="7" className="d-none d-md-block">
					<SecondMainBlock />
					<TagLine />
					{/* modified components */}
					<BlockBelowStat media="non-mobile" />
					<About media="non-mobile"/>
				</Col>
			</Row>
		</Container> 
  );
}
