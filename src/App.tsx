import { ChakraProvider } from "@chakra-ui/react";
import {RouterProvider} from "react-router-dom";
import router from "./Router";
// import { Router, Routes, Route as  BrowserRouter } from "react-router-dom";


function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}/>
    <div className="App">
    </div>
    </ChakraProvider>
  );
}

export default App;
