function customRender(reactEle, container) {
  //   const domElement = document.createElement(reactEle.type);
  //   domElement.innerHTML = reactEle.children;
  //   domElement.setAttribute("href", reactEle.props.href);
  //   domElement.setAttribute("target", reactEle.props.target);

  const domElement = document.createElement(reactEle.type);
  domElement.innerHTML = reactEle.children;
  for (const prop in reactEle.props) {
    domElement.setAttribute(prop, reactEle.props[prop]);
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
