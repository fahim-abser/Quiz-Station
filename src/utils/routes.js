import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Shop from "../components/Shop/Shop";
import Statistics from "../components/Statistics/Statistics";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<Error></Error>,
      loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'quiz/:id',
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element:<Quiz></Quiz> ,
        }
      ]
    }
  ])
  export default router