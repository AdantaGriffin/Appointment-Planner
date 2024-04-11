import React from "react";

/*#16 Receive two props: name, description*/
export const Tile = ({name, description}) => {
  return (
    <div className="tile-container" >
      {/*#17 Render a <p> element with the name prop. Give this element a className of "tile-title"*/}
      <p className="tile-title tile">
        {name}
      </p>
      {/*#18 Iterate over the values in the description object, passed in via props, and render a <p> element for each value and give each a className of "tile".*/}
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};
