import { Fragment, useState } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "Tokyo",
    "Sans Fancisco",
    "India",
    "British Columbia",
    "Toranto",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
