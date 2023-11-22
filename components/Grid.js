import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";

const Grid = ({ blok }) => {
  // console.log("grid", blok);
  let grid = (val) => {
    switch (blok.grid) {
      case "grid-cols-2":
        return "g-cols-2";
        break;
      case "grid-cols-3":
        return "g-cols-3";
        break;
      case "grid-cols-4":
        return "g-cols-4";
        break;
      default:
        return "g-cols-1";
        break;
    }
  };
  let alignItems = (val) => {
    switch (blok.itemAlign) {
      case "item-center":
        return "itemCenter";
        break;
      case "item-end":
        return "itemEnd";
        break;
      default:
        return "itemStart";
        break;
    }
  };
  let maxWidth = (val) => {
    switch (blok.maxWidth) {
      case "max-w-xs":
        return "maxWXs";
        break;
      case "max-w-sm":
        return "maxWSm";
        break;
      case "max-w-2xl":
        return "maxW2Xl";
        break;
      case "max-w-3xl":
        return "maxW3Xl";
        break;
      case "max-w-4xl":
        return "maxW4Xl";
        break;
      case "max-w-5xl":
        return "maxW5Xl";
        break;
      case "max-w-6xl":
        return "maxW6Xl";
        break;
      case "max-w-7xl":
        return "maxW7Xl";
        break;
      default:
        return "maxWNone";
        break;
    }
  };
  const addedClass = {
    paddingTop: blok?.paddingTop,
    paddingBottom: blok?.paddingBottom,
  };
  return (
    <div
      className={`grid_section w-full ${
        blok.display === "block" ? "block" : "grid gap-2"
      } gap-6 lg:gap-10 rounded-lg ${blok.reverse ? "grid_reverse" : ""} ${maxWidth(
        blok.maxWidth
      )} ${grid(blok.grid)} ${alignItems(blok.itemAlign)}`}
      style={addedClass}
      {...storyblokEditable(blok)}
    >
      {blok?.columns?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
