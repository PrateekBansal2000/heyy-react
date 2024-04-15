import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// If App.jsx is a method so we can create our own method
function MyApp() {
  return (
    <div>
      <h1>Custom app | heyy</h1>
    </div>
  );
}

/*
    const reactElement = {
      type: "a",
      props: {
        href: "https://google.com",
        target: "_blank",
      },
      children: "Click me to visit google",
  };
*/

/*
  Since react makes our html elements into a tree structure --> Why don't we create our own element and inject it?
  We can't use our own reactElement, because we don't know how react  works internally to create a new element
  So for create a new element in react we use below approach
*/

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit the google
  </a>
);
/*
  To render a element use below syntax
  ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
*/

// To create our own element we make use of build in method of react, which get complied by the BABLE and gets injected

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click to visit google",
  anotherElement
);

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
