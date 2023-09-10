import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "Tokyo",
    "Sans Fancisco",
    "India",
    "British Columbia",
    "Toranto",
  ];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
