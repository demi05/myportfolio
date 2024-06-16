import { ChakraProvider } from "@chakra-ui/react";
// import {RouterProvider} from "react-router-dom";
// import router from "./Router";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
