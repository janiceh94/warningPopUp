import Card from "../UI/Card/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";

export default function AddUser(props){

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text"/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number"/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}