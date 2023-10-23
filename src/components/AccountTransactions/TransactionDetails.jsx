import React, { useState } from "react";

function TransactionDetails({
    transaction,
    handleSaveChanges, 
    isOpen,
    onClick,
}) {
    
    const [editableCategory, setEditableCategory] = useState("");
    const [editableNote, setEditableNote] = useState("");
    const [isEditingCategory, setIsEditingCategory] = useState(false);
    const [isEditingNote, setIsEditingNote] = useState(false);

    
    const startEditingCategory = () => {
        setEditableCategory(transaction.category);
        setIsEditingCategory(true);
    };

    
    const startEditingNote = () => {
        setEditableNote(transaction.note);
        setIsEditingNote(true);
    };

    
    const saveChanges = () => {
       
        handleSaveChanges(
            editableCategory,
            editableNote,
            transaction.transactionID
        );
        setIsEditingCategory(false);
        setIsEditingNote(false);
    };

    return (
        <form
            className={`collapse-content ${isOpen ? "opened" : "closed"}`}
            style={{
                maxHeight: isOpen ? "1000px" : "0",
                transform: `scaleY(${isOpen ? 1 : 0})`,
                transformOrigin: "top",
                transition: "all 0.3s ease-in-out",
            }}
        >
            <div className="transactions_Collapsed-Details">
            <div className="transaction-label" onClick={startEditingCategory}>
                    Transaction type
                </div>
                <input
                    className="transaction-input"
                    type="text"
                    id="transaction_Type"
                    name="transactionType"
                    value={transaction.type}
                    onChange={(e) => setEditableCategory(e.target.value)}
                    autoComplete="on"
                />
            </div>
            <div className="transactions_Collapsed-Details">
                <div className="transaction-label" onClick={startEditingCategory}>
                    Category
                </div>
                <div className="transaction-input">
                    {isEditingCategory ? (
                        <>
                            <input
                                className="transaction-input"
                                type="text"
                                id="Category"
                                name="category"
                                value={editableCategory}
                                onChange={(e) => setEditableCategory(e.target.value)}
                                autoComplete="on"
                            />
                            <i
                                onClick={saveChanges}
                                className="fas fa-check"
                                aria-hidden="true"
                            ></i>
                        </>
                    ) : (
                        <>
                            <span>{editableCategory}</span>
                            <i
                                onClick={startEditingCategory}
                                className="fa fa-pencil"
                                aria-hidden="true"
                            ></i>
                        </>
                    )}
                </div>
            </div>
            <div className="transactions_Collapsed-Details">
                <div className="transaction-label" onClick={startEditingNote}>
                    Note
                </div>
                <div className="transaction-input">
                    {isEditingNote ? (
                        <>
                            <input
                                className="transaction-input"
                                type="text"
                                id="Note"
                                name="note"
                                value={editableNote}
                                onChange={(e) => setEditableNote(e.target.value)}
                                autoComplete="on"
                            />
                            <i
                                onClick={saveChanges}
                                className="fa fa-check"
                                aria-hidden="true"
                            ></i>
                        </>
                    ) : (
                        <>
                            <span>{editableNote}</span>
                            <i
                                onClick={startEditingNote}
                                className="fas fa-pencil"
                                aria-hidden="true"
                            ></i>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}

export default TransactionDetails;
