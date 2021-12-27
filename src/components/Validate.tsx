
type ValidateProps = {
    name: string;
    age: number;
    kidAge: number;
}

export const Validate = (props: ValidateProps) => {
    return (
        <div>
            <h4>Goodbye {props.name}, your age is now {props.age}. </h4>
            <h4>Your not a kid below {props.kidAge} anymore.</h4>
        </div>
    )
}