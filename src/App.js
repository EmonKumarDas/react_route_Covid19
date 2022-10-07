import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CardData from './components/Card/CardData';
import Covid from './components/covid/covid';
import Detailspage from './components/covid/detailspage';
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
        {
          path: "covid",
          loader: ()=>{
            return fetch("https://disease.sh/v3/covid-19/countries");
          },
          element: <Covid></Covid>,
        },
        {
          path: "/cvdData/:Id",
          loader:({params})=>{
            return fetch(`https://disease.sh/v3/covid-19/countries/${params.Id}`)
          },
          element: <Detailspage></Detailspage>,
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
