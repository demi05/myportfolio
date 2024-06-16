import { ChakraProvider } from "@chakra-ui/react";
// import {RouterProvider} from "react-router-dom";
// import router from "./Router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <ChakraProvider>
      {/* <RouterProvider router={router}/> */}
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
    </ChakraProvider>
  );
}

export default App;
