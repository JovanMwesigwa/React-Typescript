
type StudentsProps = {
    students: {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        school: string;
    }[]
}

export const Students = (props: StudentsProps) => {
    return (
        <>
            {
                props.students.map(student => (
                    <div>
                        <h5>name: {student.firstName} {student.lastName}</h5>
                        <h5>age: {student.age}</h5>
                        <h5>school: {student.school}</h5>
                    </div>
                ))
            }
        </>
        
    )
}