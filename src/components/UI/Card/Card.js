import classes from "./Card.module.css";

export default function Card(props){
    return (
        <div className={`${classes.card} ${props.className}`}>
            {/* pass content that is wrapped in the Card component */}
            {props.children}
        </div>
    )
}