import './App.css'
import { useState } from "react";
import TrafficLight from './components/Traffic_Light/Traffic_Light'
import PopularButton from './components/PopularButton'

function App() {

  const [color, setColor] = useState("red");

  return (
    <>

      <TrafficLight activeLight={color} />


      <PopularButton setColor={setColor} />
    </>
  );
}

export default App;





























// import './App.css'
// import TrafficLight from './components/Traffic_Light/Traffic_Light'
// import PopularButton from './components/PopularButton'



// function App() {
//   return (
//     <>
//       <TrafficLight></TrafficLight>
//       <PopularButton></PopularButton>
//     </>
//   )
// }

// export default App
