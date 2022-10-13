import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Componenets/Blog/Blog';
import Home from './Componenets/Home/Home';
import Questions from './Componenets/Questions/Questions';
import Stats from './Componenets/Stats/Stats';
import Topics from './Componenets/Topics/Topics';
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
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
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
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Stats></Stats>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <h1>404 Not Found</h1>
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
