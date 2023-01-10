import Card from "../../UI/Card/Card";
import classes from "./UserList.module.css";

export default function UserList(props){
    return (
        <div>
            <Card className={classes.users}>
            <ul>
                {props.users.map(user => {
                    return (
                        <li>
                            {user.name} ({user.age} years old)
                        </li>
                    )
                })}
            </ul>
            </Card>
        </div>
    )
}