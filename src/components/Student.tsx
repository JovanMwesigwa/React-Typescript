
type StudentProps = {
    student: {
        name: string;
        age: number;
        school: string;
    }
}

export const Student = (props: StudentProps) => {
    return (
        <div>
            <h5>Student Info:</h5>
            <h6>Name: {props.student.name}</h6>
            <h6>Age: {props.student.age}</h6>
            <h6>School: {props.student.school}</h6>
        </div>
    )
}