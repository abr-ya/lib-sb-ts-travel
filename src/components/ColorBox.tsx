import React from "react";
import { IColor } from "../@interfaces";

interface IColorBox {
  color: IColor;
}

const ColorBox = ({ color }: IColorBox) => (
  <div key={color.bgClass} className="flex flex-col rounded-lg h40">
    <div className={`h-20 ${color.bgClass} rounded-t-lg`} />
    <div className="m-3">
      <p className="text-lg font-medium text-gray-900">{color.code}</p>
      <p className="text-sm font-normal text-gray-500">{color.hex}</p>
    </div>
  </div>
);

export default ColorBox;
