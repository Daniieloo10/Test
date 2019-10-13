import React from 'react';


const Dashboard = React.lazy(() => import("./views/Pages/Dashboard/Dashboard"));



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

  { path: '/dashboard', name: 'Admin Home', component: Dashboard },
  

  
];

export default routes;
