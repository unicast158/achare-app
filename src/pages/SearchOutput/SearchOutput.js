import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import ServiceService from "../../serivce/service.service";

const SearchOutput = (props) => {

    const {q, city} = useParams()
    const [dataList, setDataList] = useState([])

    useEffect(e => {
        ServiceService.getData(q,city).then(res => {
            setDataList(res);
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <Row>
            {
                dataList.map(item => {
                    return (
                        <Col xs={3}>
                            <Card style={{width: '18rem'}}>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Link to={'/details/' + item.slug}><span>مشاهده</span></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default SearchOutput;
