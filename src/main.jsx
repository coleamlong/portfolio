// Import necessary modules
import { createGlobalStyle, ThemeProvider } from "styled-components";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import Open Sans font

// Create global styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
    color: white;
    font-family: 'Open Sans', sans-serif; /* Apply Open Sans to the root element */
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={{}}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
