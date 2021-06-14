import { render } from "@testing-library/react";
import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
    </div>
  );
};
//   return React.createElement(
//     "div",
//     null,
//     React.createElement("h1", null, "Hello Hemanth")
//   );
// };

export default Hello;
