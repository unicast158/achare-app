import React, {useEffect, useState} from 'react';
import {Switch, useHistory, useParams} from "react-router-dom";
import StepSingleQuestion from "./steps/StepSingleQuestion";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import StepMultiQuestion from "./steps/StepMultiQuestion";
import './details.scss'
import axios from "axios";
import QuestionsTemplate from "../../Components/Questions/questionsTemplate";

const Details = (props) => {
    const {id: pageId, step = 0} = useParams()
    const history = useHistory();
    const [allquestions, setallQuestions] = useState({});
    const [questions, setQuestions] = useState([]);
    const [buttonName, setbuttonName] = useState("شروع کنید");
    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:3001/data", {}).then((res) => {
                setallQuestions(res.data[0]);
                console.log(res);
                setQuestions(res.data[0].serviceQuestions);
                console.log(questions);
                console.log(allquestions);
            }).catch(err => {
                console.log(caches?.message)
            });
        }, 1500);
    }, [])

    useEffect(() => {
        if (!step)
            setbuttonName("شروع کنید");
        else {
            setbuttonName("مرحله بعد");
        }
    }, [step])

    const onChangeQuestionValue = (value) => {
        const lastQuestion = [...questions];
        lastQuestion[step].value = value;
        setQuestions(lastQuestion);
    }

    const generateContent = () => {

        const question = questions[step];
        if (!question)
            return <div className={"body-preview"} style={{backgroundColor: "#f5f5f5"}}>
                <Container>
                    <Row className={"preview-section justify-content-center align-items-center"}>
                        <Col xs={12} className={"d-flex justify-content-center align-items-center"}>
                            <p>Loading ...</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        if (!step)
            return <div className={"body-preview"} style={{backgroundColor: "#f5f5f5"}}>
                <Container>
                    <Row className={"preview-section"}>
                        <Col xs={12}>
                            <div className={"d-flex"}>
                                <Image src={allquestions.headImg} width={50} height={"auto"}
                                       className={"img-fluid"}></Image>
                                <h4 className={"me-4"}><b>{allquestions.serviceName}</b></h4>
                            </div>
                        </Col>
                        <Col xs={12} className={"bg-white border mt-4 preview-content"}>
                            <div>
                                <h6 className={"mb-4"}><b>{allquestions.summery}</b></h6>
                                <p className={"preview-desc"}>
                                    {allquestions.serviceDescription}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        if (question.single === true)
            return <QuestionsTemplate>
                <StepSingleQuestion question={question}
                                    value={questions[step].value}
                                    setValue={onChangeQuestionValue}/>
            </QuestionsTemplate>
        else if (question.single === false)
            return <QuestionsTemplate>
                <StepMultiQuestion question={question} value={questions[step].value}
                                   setValue={onChangeQuestionValue}/>
            </QuestionsTemplate>
    }

    const QuestionLayout = (props) => {
        function handleNextStep() {
            if (step < questions.length - 1)
                history.push(`/Details/${pageId}/${+step + 1}`)
        }

        return <>
            {props.children}
            <div className={"nav-down py-3 d-flex justify-content-around"}>
                <Button style={{border: "1px solid #00bfa5", backgroundColor: "transparent", color: "#00bfa5"}}
                        onClick={() => step > 0 && history.push(`/Details/${pageId}/${step - 1}`)}>بازگشت</Button>
                <Button style={{backgroundColor: "#00bfa5", border: "none"}}
                        onClick={handleNextStep}
                >{buttonName}</Button>
            </div>
        </>
    }


    return <QuestionLayout>
        {generateContent()}
    </QuestionLayout>
};

export default Details;
