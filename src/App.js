import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CardData from './components/Card/CardData';
import Chart from './components/Graph/chart';
import Main from './components/layout/Main';
import PageNot from './components/nopage/PageNot';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <CardData></CardData>
        },
        {
          path: "/home",
          element: <CardData></CardData>,
        },
        {
          path: "/graph",
          element: <Chart></Chart>,
        },
      ],
   
   

    },
    {   path:'*',
  element:<PageNot></PageNot>
  }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
