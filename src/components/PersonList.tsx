type PersonListProps = {
    people: {
        id: number;
        first: string;
        last: string;
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {
                props.people.map(item => 
                    <h4 key={item.id}>{item.first} {item.last}</h4>
                )
            }
        </div>
    )
}