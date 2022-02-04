import * as React from "react";

export const MyCommandCell = props => {
    const {
        dataItem
    } = props;
    const inEdit = dataItem[props.editField];
    const isNewItem = dataItem.key === undefined;
    return inEdit ? <td className="k-command-cell">
        <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-grid-save-command"
                onClick={(data) => {
                    isNewItem ? props.add(dataItem) : props.update(dataItem);
                    return;
                }}>
            {isNewItem ? "Add" : "ثبت"}
        </button>
        <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-grid-cancel-command"
                onClick={() => isNewItem ? props.discard(dataItem) : props.cancel(dataItem)}>
            {isNewItem ? "Discard" : "انصراف"}
        </button>
    </td> : <td className="k-command-cell">
        <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-grid-edit-command"
                onClick={() => props.edit(dataItem)}>
            ویرایش
        </button>
        {/*<button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-grid-remove-command" onClick={() => window.confirm("Confirm deleting: " + dataItem.ProductName) && props.remove(dataItem)}>
            Remove
        </button>*/}
    </td>;
};