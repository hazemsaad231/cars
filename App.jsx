import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Master from './components/master'
import Details from './components/carDetails'
import AllCars from './components/allCars'
function App() {
 
  let route = createBrowserRouter([
    {
      path: "/",
      element: <Master />,
      errorElement: <div>Error</div>,
      children: [
        {index: true, element: <Home />},
        {path: "home", element: <Home />},
        {path: "details", element: <Details />},
        {path: "allcars", element: <AllCars/>},
]}]);

  return (
    <>
    <div>
    <RouterProvider router={route} />
    </div>
    
    </>
  )
}

export default App
