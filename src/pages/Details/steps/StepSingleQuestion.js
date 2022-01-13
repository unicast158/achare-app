import React, {useState} from 'react';

const StepSingleQuestion = ({question, value, setValue}) => {

    return (
        <div>
            {question.title} {question.required && "*"}
            <div>
                {question.options.map(item =>
                    <label>{item.label}<input onChange={() => setValue(item.value)} checked={value === item.value}
                                              type="radio"/></label>
                )}
            </div>
        </div>
    );
};

export default StepSingleQuestion;
