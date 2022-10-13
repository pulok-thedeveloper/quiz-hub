import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Componenets/Home/Home';
import Questions from './Componenets/Questions/Questions';
import Stats from './Componenets/Stats/Stats';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/:id',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Questions></Questions>
        },
        {
          path: '/stats',
          element: <Stats></Stats>
        }
      ],
      element: <Main></Main>
      
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
