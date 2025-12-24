import { useState } from "react";
import viteLogo from "/vite.svg";
import Button from "react-bootstrap/Button";

function Item({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-fuchsia-800 mx-auto p-10 w-50 h-30 text-white flex flex-col -mt-90"
        >
          <div>{item.title}</div>
          <hr />
          <div>{item.desc}</div>
        </div>
      ))}
    </>
  );
}

export default Item;
