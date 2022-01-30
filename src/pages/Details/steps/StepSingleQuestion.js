import React, {useState} from 'react';
import {ListGroup} from "react-bootstrap";
import CustomList from "./CustomList";

const StepSingleQuestion = ({question, value, setValue}) => {

    return (
        <div>
            <p className={"mb-5"}>
                <h5 className={"d-inline-block"}><b>{question.summery}</b></h5> <span
                className={"text-danger"}>{question.required && "*"}</span>
            </p>
            <ListGroup className={"rounded-3"}>
                <CustomList data={question.o}/>
                {question.options.map(item => {
                        return <ListGroup.Item className={"py-3"}><input onChange={() => setValue(item.value)}
                                                      checked={value === item.value}
                                                      type="radio"/><span className={"me-2"}>{item.label}</span></ListGroup.Item>
                    }
                )}
            </ListGroup>
        </div>
    );
};

export default StepSingleQuestion;
