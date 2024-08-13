import ColorList from "./components/ColorList";
import EvenNumbers from "./components/EvenNumbers";
import UserList from "./components/UserList";


function App() {
  let greeting: string = "Hello, TypeScript!"
  let numberList: number[] = [5, 10, 15]

  const calcualteSum = (a: number, b: number): number => {
    return a + b
  };

  return (
    <>
    <h1>App Component</h1>
    <p>{greeting}</p>
    {numberList.map((number, index) => (
      <p key={index}>{number}</p>
    ))}
    <p>{calcualteSum(5, 10)}</p>
    <h1>Color List Component</h1>
    <ColorList />
    <h1>Even Numbers Component</h1>
    <EvenNumbers />
    <h1>User List Component</h1>
    <UserList />
    </>
  )
}

export default App
