import React, {useEffect, useState} from 'react';
import {Switch, useHistory, useParams} from "react-router-dom";
import StepSingleQuestion from "./steps/StepSingleQuestion";
import {Button} from "react-bootstrap";
import StepMultiQuestion from "./steps/StepMultiQuestion";
import axios from "axios";

const Details = (props) => {
    const {id: pageId, step = 0} = useParams()
    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        axios.get(`https://61c216589dbcca0017c8232b.mockapi.io/api/v1/${pageId}`, {}).then(res => {
            setTimeout(() => {
                setQuestions(res.data.items)
            }, 1500)
        })
    }, [])
    const onChangeQuestionValue = (value) => {
        const lastQuestion = [...questions];
        lastQuestion[step].value = value;
        setQuestions(lastQuestion)
    }
    const generateContent = () => {

        const question = questions[step];
        console.log(question,'question');
        if (!question)
            return <p>loading questions... </p>
        if (question.single === true)
            return <StepSingleQuestion question={question}
                                       value={questions[step].value}
                                       setValue={onChangeQuestionValue}/>
        else if (question.single === false)
            return <StepMultiQuestion question={question}/>
    }

    const QuestionLayout = (props) => {
        function handleNextStep() {
            if (step < questions.length - 1)
                history.push(`/Details/${pageId}/${+step + 1}`)
        }

        return <div>
            {props.children}
            <div>
                <Button onClick={() => step > 0 && history.push(`/Details/${pageId}/${step - 1}`)}>بازگشت</Button>
                <Button
                    onClick={handleNextStep}
                >مرحله
                    بعد</Button>
            </div>
        </div>
    }


    return <QuestionLayout>
        {generateContent()}
    </QuestionLayout>
};

export default Details;
