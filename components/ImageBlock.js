import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import React from "react";

const ImageBlock = ({ blok }) => {
  // console.log("image", blok);
  let maxWidth = (val) => {
    switch (blok.maxWidth) {
      case "max-w-xs":
        return "maxWXs";
        break;
      case "max-w-sm":
        return "maxWSm";
        break;
      case "max-w-4xl":
        return "maxW4Xl";
        break;
      case "max-w-5xl":
        return "maxW5Xl";
        break;
      default:
        return "maxWNone";
        break;
    }
  };

  const addedStyle = {
    marginBottom: blok?.marginBottom,
    marginTop: blok?.marginTop,
    paddingBottom: blok?.paddingBottom,
    paddingTop: blok?.paddingTop,
  };

  return (
    <div
      className={`relative flex ${blok?.align} ${maxWidth(blok?.maxWidth)} image_block`}
      style={addedStyle}
      {...storyblokEditable(blok)}
    >
      {blok?.image?.filename && (
        <Image
          alt=""
          src={`${blok?.image.filename}`}
          className={`max-w-full rounded-lg ${blok?.imageSize}`}
          width={600}
          height={600}
          sizes="(min-width: 808px) 50vw, 100vw"
          {...(blok.priority ? { priority: true } : {})}
        />
      )}
    </div>
  );
};

export default ImageBlock;
