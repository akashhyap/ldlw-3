import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import React from "react";

const Hero = ({ blok }) => {

  let minHeight = (val) => {
    switch (blok.minHeight) {
      case "70vh":
        return "minH70vh";
        break;
      case "75vh":
        return "minH75vh";
        break;
      case "min-h-450":
        return "minH450";
        break;
      case "min-h-screen":
        return "minHScreen";
        break;
      default:
        return " ";
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
  const addedClasses = {
    backgroundColor: blok?.background_color?.color,
    marginTop: blok?.marginTop,
    marginBottom: blok?.marginBottom,
    paddingLeft: blok?.paddingLeft,
    paddingRight: blok?.paddingRight,
    paddingTop: blok?.paddingTop,
    paddingBottom: blok?.paddingBottom,
  };
  const overlayColor = {
    backgroundColor: blok?.overlay_color?.color,
    opacity: blok?.opacity,
  };

  return (
    <div
      {...storyblokEditable(blok)}
      className={`relative overflow-hidden ${textAlign(
        blok.textAlign
      )} ${minHeight(blok.minHeight)}
       ${blok.itemAlign ? "flex hero_flex" : " "} ${alignItems(
        blok.itemAlign
      )} overflow-hidden
      `}
      style={addedClasses}
    >
      {blok?.background_image?.filename && (
        // <img
        //   className="absolute inset-0 -z-10 h-full w-full object-cover"
        //   alt={blok?.background_image?.alt}
        //   src={`${blok.background_image.filename}/m/`}
        // />
        <Image
          alt={blok?.background_image?.alt}
          src={`${blok.background_image.filename}`}
          fill
          className="w-full h-full object-cover object-center"
        />
      )}
      {blok.body.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
      {blok?.overlay_color?.color && (
        <div
          className="absolute top-0 right-0 bottom-0 left-0"
          style={overlayColor}
        ></div>
      )}
    </div>
  );
};

export default Hero;
