import React from "react";
import Routes from "./Routes";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes />
      <Toaster
      
        toastOptions={{
          success: {
            style: {
              background: "green",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
    </Router>
  );
}
export default App;
