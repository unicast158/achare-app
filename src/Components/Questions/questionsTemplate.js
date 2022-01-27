import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const QuestionsTemplate = (props) => {
    return (
        <div className={"body-preview"} style={{backgroundColor: "#f5f5f5"}}>
            <Container>
                <Row className={"preview-section"}>
                    <Col xs={12} className={"bg-white border mt-4 preview-content"}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default QuestionsTemplate;