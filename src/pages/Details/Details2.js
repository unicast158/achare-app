import React, {useEffect, useState} from 'react';
import {Switch, useHistory, useParams} from "react-router-dom";
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
        ]
    }, {
        type: "multi",
        title: "سوال دوم",
        description: "توضیحات",
        options: [
            {label: "گزینه دو", value: "2"},
            {label: "گزینه یک", value: "1"},
        ],
        required: true
    },
]

const Details = (props) => {
    const {id: pageId, step} = useParams()
    const history = useHistory();

    useEffect(() => {

    }, [pageId]);

    const generateContent = () => {
        const question = questionsCooking[step];
        if (question.type === "single")
            return <StepSingleQuestion question={question}/>
        else if (question.type === "multi")
            return <StepMultiQuestion question={question}/>
    }

    const QuestionLayout = (props) => {
        return <div>
            {props.children}
            {step}
            <div>
                <Button onClick={() => step > 0 && history.push(`/Details/${pageId}/${step - 1}`)}>بازگشت</Button>
                <Button
                    onClick={() => step < questionsCooking.length - 1 && history.push(`/Details/${pageId}/${+step + 1}`)}>مرحله
                    بعد</Button>
            </div>
        </div>
    }


    return <QuestionLayout>
        {generateContent()}
    </QuestionLayout>
};

export default Details;
