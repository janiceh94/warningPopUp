import Card from "../../UI/Card/Card";
import {useState} from "react";
import classes from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

export default function AddUser(props){

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const handleUsername = (e) => {
        setEnteredUsername(e.target.value);
    }
    const handleAge = (e) => {
        setEnteredAge(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        // Force conversion of string into a number by adding +
        if(+enteredAge < 1){
            return;
        }
        // console.log(enteredUsername, enteredAge)
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }

    return (
        <div>
            <ErrorModal 
                title="An error occured" 
                message="Something went wrong"
            />
            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        onChange={handleUsername}
                        value={enteredUsername}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        onChange={handleAge}
                        value={enteredAge}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}