import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Masala/Home';
import About from './Masala/About';
import Dashboard from './Masala/DashBoard';
import NavbarLink from './Masala/NavigationBar';
import NavLinkBar from './Masala/NavLinkBar';
import ParamComp from './Masala/ParamComp';
import PageNotFound from './Masala/PageNotFound';
import Java from './Masala/Java';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        {/* <NavbarLink /> */}
        <NavLinkBar/>
        <h1>Welcome to Navigation Journey</h1>
      </div>
    ),
  },
  {
    path: '/home',
    element: (
      <div>
        {/* <NavLinkBar/> */}
        {/* <NavbarLink /> */}
        <Home />
      </div>
    ),
  },
  {
    path: '/about',
    element: (
      <div>
        {/* <NavLinkBar/> */}
        {/* <NavbarLink /> */}
        <About />
      </div>
    ),
  },
  {
  path: '/dashboard',
  element: <Dashboard />,
  // children: [ //Open with parent
  //   {
  //     path: 'java', // renders at /dashboard/java
  //     element: <Java />,
  //   }
  // ]
}
,{
  //Best because in prvious code it open with it parent but now open in seperate page
  path: '/dashboard/java',
  element: <Java />,
},

  {
path:"/student/:id",
element:<>
{/* <NavLinkBar/> */}
 <ParamComp/></>

  },

  {
    path:"*",
    element:<PageNotFound/>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
