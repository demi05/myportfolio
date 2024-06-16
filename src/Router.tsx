import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./Layout";

const router = 
 createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: 
    [{
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/",
    element: <Projects />
  },
  {
    path: "/",
    element: <Contact />
  }]}
])


export default router
