import React from 'react';
import {ListGroup} from "react-bootstrap";

const StepMultiQuestion = ({question, value, setValue}) => {
    return (
        <div>
            <p className={"mb-5"}>
                <h5 className={"d-inline-block"}><b>{question.summery}</b></h5> <span
                className={"text-danger"}>{question.required && "*"}</span>
            </p>
            <ListGroup className={"rounded-3"}>
                {question.options.map(item => {
                        return <ListGroup.Item className={"py-3"}><input onChange={(e) => {
                            if (e.target.checked) {
                                if (value)
                                    setValue([item.value, ...value])
                                else setValue([item.value])
                            } else {
                                if (value)
                                    setValue(
                                        value.filter(e => {
                                            return e !== item.value;
                                        })
                                    );
                            }
                        }}
                                                                         checked={
                                                                             value?.includes(item.value)
                                                                         }
                                                                         type="checkbox"/><span
                            className={"me-2"}>{item.label}</span></ListGroup.Item>
                    }
                )}
            </ListGroup>
        </div>
    );
};

export default StepMultiQuestion;
