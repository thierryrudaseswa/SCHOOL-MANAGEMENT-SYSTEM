// import React from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import LandPage from "./pages/LandPage/LandPage";

// import { LoginAdmin, LoginClient, SignAdmin, SignClient } from "./allImports";
// import SchoolReg from "./pages/SchoolReg/SchoolReg";
// import DashBoard from "./pages/DashBoard/DashBoard";
// import FinancePa from "./pages/Finance/FinancePa";
// import FinancePa2 from "./pages/Finance2/FinancePa2";
// import Document from "./pages/Document/Document";
// import Events from "./pages/Events/Events";
// import Calendar from "./pages/Calendar/Calendar";
// import Chat from "./pages/Chat/Chat";
// import Finance3 from "./pages/Finance3/Finance3";



// Define the routes in an object to make it more maintainable
// const routes = [
//   { path: '/', component: LoginAdmin },
//   { path: '/LoginClient', component: LoginClient },
//   { path: '/SignAdmin', component: SignAdmin },
//   { path: '/SignClient', component: SignClient }
// ];

function App() {
  return (
    <>
    <LandPage />
    {/* <Finance3 /> */}
    {/* <Chat /> */}
    {/* <Calendar /> */}
    {/* <Events /> */}
    {/* <Document /> */}
    {/* <DashBoard /> */}
    {/* <FinancePa /> */}
       {/* <FinancePa2 /> */}
    {/* <LoginAdmin/> */}
    {/* <SchoolReg /> */}
    </>
    // <Router>
    //   <Switch>
  
    //     {routes.map((route, index) => (
    //       <Route key={index} path={route.path} component={route.component} />
    //     ))}

     
    //     <Route path="*" render={() => <Redirect to="/LoginAdmin" />} />
    //   </Switch>
    // </Router>
  );
}

export default App;
