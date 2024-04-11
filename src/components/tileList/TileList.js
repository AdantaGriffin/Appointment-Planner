import React from "react";
import { Tile } from '../tile/Tile';

/*#14 Receive one prop: An array of objects to render as a list*/
export const TileList = ({tiles}) => {
  return (
    <div>
      {/*#15 Use the array passed via props to iteratively render Tile components, using each object in the array to pass the name and description props to each rendered Tile component*/}
      {tiles.map((tile, index) => {
        const {name, ...description} = tile;
        return <Tile key={index} name={name} description={description}/>
      })}
    </div>
  );
}; 
