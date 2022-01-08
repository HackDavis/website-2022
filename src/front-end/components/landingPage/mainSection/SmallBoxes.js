import React from 'react'
import styles from "../../../css/landingPage/SmallBoxes.module.scss";
import {Row, Col, Container} from "reactstrap";

function Box() {
  return (
    <div className={styles.box}></div>
  );
}

export function SmallBoxes() {
  return (
    
    <div className={styles.container}>
      <Row>
        <Col xs={6}>
					<Box/>
        </Col> 
        <Col xs={6}>
					<Box/>
				</Col>
      </Row>
			<Row>
        <Col xs={6}>
					<Box/>
        </Col> 
        <Col xs={6}>
					<Box/>
				</Col>
      </Row>
    </div>
  );
}
