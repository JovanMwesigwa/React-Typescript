
type PersonProps = {
    person: {
        firstName: string;
        lastName: string;
    }
}


export const Person = (props: PersonProps) => {
    return (
        <div className="name">
            <h3>{props.person.firstName} {props.person.lastName}</h3>
        </div>
    )
}