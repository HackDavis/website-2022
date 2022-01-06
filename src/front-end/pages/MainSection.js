import React from "react";
import { MainBlock } from "../components/landingPage/mainSection/MainBlock";
import { Row, Col, Container} from "reactstrap";

export function MainSection() {
  return (
    <Container fluid>
			<Row>
				<Col xs="12">
					<MainBlock />
				</Col>
			</Row>
		</Container> 
  );
}
