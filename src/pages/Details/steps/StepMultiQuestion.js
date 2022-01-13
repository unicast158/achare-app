import React from 'react';

const StepMultiQuestion = ({question}) => {
    return (
        <div>
            {question.title}
            <div >
                <label>گزینه 1<input type="checkbox"/></label>
                <label>گزینه 2<input type="checkbox"/></label>
                <label>گزینه 3<input type="checkbox"/></label>
            </div>
        </div>
    );
};

export default StepMultiQuestion;
