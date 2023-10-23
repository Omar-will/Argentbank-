import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectToken, selectUserName, selectFirstName, selectLastName } from "../../redux/selector/selector";
import { updateProfile } from "../../redux/reducers/authSlice";
import "./EditForm.scss";

function EditForm({ onClose }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(selectToken);
    const userName = useSelector(selectUserName);
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);
    const [newUserName, setNewUserName] = useState("");
    const [isUsernameUpdated, setIsUsernameUpdated] = useState(false); // État pour suivre si le nom d'utilisateur a été mis à jour

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUserName.trim() === "") {
            alert("User Name cannot be empty.");
            return;
        }
        const updatedUserName = { userName: newUserName };
        dispatch(updateProfile(token, updatedUserName))
            .then(() => {
                setIsUsernameUpdated(true); // Mettez à jour l'état lorsque le nom d'utilisateur est modifié
                alert("Username updated successfully!"); // Ajoutez une alerte de réussite
                navigate("/user");
                onClose();
            })
            .catch((error) => {
                dispatch(error);
                alert("Connection error. Please try Again.");
            });
    };

    const cancel = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div>
            <h1>
                Edit user info
                <br />
            </h1>
            {isUsernameUpdated && ( // Afficher l'alerte si le nom d'utilisateur a été mis à jour
                <div className="alert alert-success">
                    Username updated successfully!
                </div>
            )}
            <form className="UserSettings">
                <div>
                    <label htmlFor="user_Name">User Name</label>
                    <input
                        type="text"
                        id="user_Name"
                        name="userName"
                        placeholder={userName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        required
                        autoComplete="on"
                    />
                </div>
                <div>
                    <label htmlFor="first_Name">First name</label>
                    <input
                        type="text"
                        id="first_Name"
                        name="firstName"
                        value={firstName ?? ""}
                        readOnly
                        disabled
                        autoComplete="on"
                    />
                </div>
                <div>
                    <label htmlFor="last_Name">Last name</label>
                    <input
                        type="text"
                        id="last_Name"
                        name="lastName"
                        value={lastName ?? ""}
                        readOnly
                        disabled
                        autoComplete="on"
                    />
                </div>
                <div className="wrapper-button buttons">
                    <button
                        type="submit"
                        className="edit-button"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="edit-button"
                        onClick={cancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditForm;
