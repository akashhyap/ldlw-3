"use client"
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const CarouselWrapper = ({ blok }) => {
  // console.log(blok);  
  const [curr, setCurr] = useState(0);
  
  const prev = () => setCurr((cur) => (cur === 0 ? blok?.body.length - 1 : cur - 1))
  const next = () => setCurr((cur) => (cur === blok?.body.length - 1 ? 0 : cur + 1))


  let alignMargin = (val) => {
    switch (blok.alignMargin) {
      case "mx-auto":
        return "mxAuto";
        break;
      case "ml-auto":
        return "mlAuto";
        break;
      case "ml-0":
        return "ml0";
        break;
      default:
        return "mxAuto";
        break;
    }
  };
  return (
    <div {...storyblokEditable(blok)} className={`overflow-hidden relative ${alignMargin(blok.alignMargin)} mt-9`}>
      <div className="flex transition-transform ease-out duration-500" style={{transform:`translateX(-${curr * 100}%)`}}>
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
      <div className="flex items-center justify-between p-4 mx-auto w-20">
        <button onClick={prev}>
          <BsChevronLeft size={20} className="font-extrabold" />
        </button>
        <button onClick={next}>
          <BsChevronRight size={20} className="font-extrabold" />
        </button>
      </div>
    </div>
  );
};

export default CarouselWrapper;
