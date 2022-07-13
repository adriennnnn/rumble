import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';


const App = ()=> (
  <div className="App">
    <Monster />
    <br></br>
    <section className="container-fluid">
      <PlayerList />
    </section >
  </div>
)

// class App extends React.Component {
//   render() {
//     function App() {
//       <section className="container-fluid">
//       </section >
//     }
//     return (
//       <div className="App" onChange={App}>
//         <Monster />
//         <br></br>
//         {/* <section className="container-fluid"> */}
//           <PlayerList />
//         {/* </section > */}
//       </div>
//     )
//   }
// }




export default App;