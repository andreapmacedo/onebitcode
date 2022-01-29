import react, { Fragment } from "react";

import Planets from "./components/planets";
// import RoutesF from './routes'

//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import PlanetsScreen from './screens/planets'
// import Planet from './components/planets/planet'

function App() {
  return (
    <Fragment>
      <Planets/>
    </Fragment>
  );
}

// function App() {
//   return (
//     <div>
//       <RoutesF/>
//     </div>   
//   );
// }

// function App() {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route exact path='/' component={PlanetsScreen}/>
//         </Routes>
//       </Router>
//     </div>   
//   );
// }

export default App;
