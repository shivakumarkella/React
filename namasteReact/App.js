import React from "react";
import ReactDOM from "react-dom";

const header = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World , jai Shree Ram"
);

const Title = () => {
  return <h1>This is the title of the page, nested Component</h1>;
};
//create react-functional element
const HeaderJsx = () => (
  <div>
    <Title />
    <h1>Om Namha Shivayaaa . . functional</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderJsx />);
