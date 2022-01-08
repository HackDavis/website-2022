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
				<Col xs="12">
					<MainBlock />
					<SecondMainBlock />
					<TagLine />
					<SmallBoxes />
					<Stats />
					<BlockBelowStat />
					<About />
					<LastSlantedBlock />
				</Col>
			</Row>
		</Container> 
  );
}
