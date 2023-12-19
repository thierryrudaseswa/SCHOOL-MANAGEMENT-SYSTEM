import React from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { LoginAdmin, LoginClient, SignAdmin, SignClient } from "./allImports";
import SchoolReg from "./pages/SchoolReg/SchoolReg";
import DashBoard from "./pages/DashBoard/DashBoard";


// Define the routes in an object to make it more maintainable
const routes = [
  { path: '/', component: LoginAdmin },
  { path: '/LoginClient', component: LoginClient },
  { path: '/SignAdmin', component: SignAdmin },
  { path: '/SignClient', component: SignClient }
];

function App() {
  return (
    <>
    <DashBoard />
    
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
