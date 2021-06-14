import React from "react";

function NameList() {
  const names = ["Bruce", "clark", "dlam"];
  const namesList = names.map((name) => <h2>{name}</h2>);
  return <div>{NameList}</div>;
}

export default NameList;
