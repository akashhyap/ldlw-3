"use client";
import { StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

const Footer = ({ blok }) => {
  // console.log("footer", blok);
  return (
    <div className="footer pt-9">
      <div className="px-4 sm:px-6">
        {blok?.footer.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
      <div className="py-3 mt-9 text-xs text-center text-white bg-black">
        {render(blok?.copyright)}
      </div>
    </div>
  );
};

export default Footer;
