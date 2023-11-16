import { storyblokEditable } from "@storyblok/react";
import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

const OfferContent = ({ blok }) => {
  const selectedTag = blok.selectTextTag || "p";
  const priceTag = blok.priceTag || "p";
  const classes = [blok?.textFontWeight];
  const priceClasses = [blok?.priceFontWeight];
  const addedClass = {
    backgroundColor: blok?.bgColor?.color,
  };
  return (
    <div
      {...storyblokEditable(blok)}
      className="rounded-2xl p-8"
      style={addedClass}
    >
      <div>
        {blok.text &&
          React.createElement(
            selectedTag,
            {
              className: classes.join(" "),
              style: {
                color: blok?.textColor?.color,
                fontSize: blok?.textFontSize,
              },
            },
            blok.text
          )}
      </div>
      <div className="pt-3">
        {blok.priceLabel &&
          React.createElement(
            priceTag,
            {
              className: priceClasses.join(" "),
              style: {
                color: blok?.priceColor.color,
                fontSize: blok?.priceSize,
              },
            },
            blok.priceLabel
          )}
      </div>
      <div
        style={{ color: blok?.descriptionColor?.color }}
        className="[&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:my-5 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:my-5"
      >
        {render(blok.description)}
      </div>
    </div>
  );
};

export default OfferContent;
