import Card from "../UI/Card/Card";
import {useState} from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";

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
        console.log(enteredUsername, enteredAge)
    }

    return (
        <div>
            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        onChange={handleUsername}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        onChange={handleAge}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}