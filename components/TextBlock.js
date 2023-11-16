import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const TextBlock = ({ blok }) => {
  // console.log("text block", blok);
  let textAlign = (val) => {
    switch (blok.textAlign) {
      case "text-left":
        return "textLeft";
        break;
      case "text-center":
        return "textCenter";
        break;
      case "text-right":
        return "textRight";
        break;
      default:
        return "textLeft";
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

  const addedClasses = {
    paddingTop: blok?.paddingTop,
    paddingBottom: blok?.paddingBottom,
    paddingLeft: blok?.paddingLeft,
    color: blok?.color?.color,
  };
  const selectedTag = blok.selectTag || "h2";

  const classes = [blok?.titleFont, "mb-2"];

  return (
    <div
      className={`z-10 relative leading-loose [&>h1]:my-6 [&>h2]:text-4xl [&>h3]:my-4 [&>h3]:text-2xl [&>h4]:text-xl [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:my-5 text_block ${textAlign(blok.textAlign)} ${maxWidth(blok.maxWidth)} ${blok?.name}`}
      {...storyblokEditable(blok)}
      style={addedClasses}
    >
      {blok.titleLabel &&
        React.createElement(
          selectedTag,
          {
            className: classes.join(" "),
            style: {
              color: blok?.color?.color,
            },
          },
          blok.titleLabel
        )}
      {render(blok.content)}
    </div>
  );
};

export default TextBlock;