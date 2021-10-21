import { useContext } from "react";
import { FontSizeContext } from "../contexts";

export const useClamp = (min: string, max: string) => {
  const { rootFontSize } = useContext(FontSizeContext)
  
  const minFontSize = Number(min.split("rem")[0]);
  const maxFontSize = Number(max.split("rem")[0]);

  const minWidth = 270 / rootFontSize;
  const maxWidth = 1920 / rootFontSize;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `
    clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxFontSize}rem)
  `;
};