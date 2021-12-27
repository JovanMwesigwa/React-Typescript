import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Student } from "./components/Student";
import { Students } from "./components/Students";
import { Validate } from "./components/Validate";


function App() {
  // const person = {
  //   firstName: "Bruce",
  //   lastName: "Wayne",
  // }

  const students = [
    {
      id: 1,
      firstName: "Jack",
      lastName: "Dorsey",
      age: 42,
      school: "Twitter academy"
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      age: 52,
      school: "Face academy"
    },
    {
      id: 3,
      firstName: "Janae",
      lastName: "Doe",
      age: 31,
      school: "Instagram academy"
    },
  ]

  const people = [
    {
      id: 1,
      first: "Bruce",
      last: "Wayne"
    },
    {
      id: 2,
      first: "Pricess",
      last: "Diana"
    },
    {
      id: 3,
      first: "Iron",
      last: "Man"
    },
  ]
  return (
    <div className="App">
      {/* <Greet name="Jovan" messageCount={20} isLoggedIn={false} /> */}
      {/* <Person person={person} /> */}
      {/* <PersonList people={people} /> */}
      <Students students={students} />
    </div>
  );
}

export default App;
