import React, {useEffect, useState} from 'react';
import {Switch, useParams} from "react-router-dom";
import StepSingleQuestion from "./steps/StepSingleQuestion";
import {Button} from "react-bootstrap";
import StepMultiQuestion from "./steps/StepMultiQuestion";

const questionsCooking = [
    {
        type: "single",
        title: "سوال اول",
        description: "توضیحات",
        options: [
            {label: "گزینه یک", value: "1"},
            {label: "گزینه دو", value: "2"},
        ],
        value: "1"
    }, {
        type: "multi",
        title: "سوال دوم",
        description: "توضیحات",
        options: [
            {label: "گزینه دو", value: "2"},
            {label: "گزینه یک", value: "1"},
        ],
        value: "2",
        required: true
    },
]

const Details = (props) => {
    const {id: pageId} = useParams()
    const [step, setStep] = useState(0)
    const [questions, setQuestions] = useState([]);


    useEffect(() => {
        setTimeout(() => {
            setQuestions(questionsCooking)
        }, 1500)
    }, [])

    useEffect(() => {

    }, [pageId]);

    const generateContent = () => {
        const question = questions[step];
        if (question.type === "single")
            return <StepSingleQuestion question={question}
                                       value={questions[step].value}
                                       setValue={val => questions[step].value = val}/>
        else if (question.type === "multi")
            return <StepMultiQuestion question={question}/>
    }

    const QuestionLayout = (props) => {
        return <div>
            {props.children}
            {step}
            <div>
                <Button onClick={() => step > 0 && setStep(step - 1)}>بازگشت</Button>
                <Button onClick={() => step < questions.length - 1 && setStep(step + 1)}>مرحله بعد</Button>
            </div>
        </div>
    }


    return <QuestionLayout>
        {generateContent()}
    </QuestionLayout>
};

export default Details;
