import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = ({ blok }) => {
  // console.log("button", blok);
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
  const addedStyles = {
     marginTop: blok?.marginTop
  }

  return (
    <div className={`relative z-20 pb-8 xl:pb-0 ${textAlign(blok.textAlign)}`} style={addedStyles}>
      <Link href={blok.link.cached_url} className="primary-btn">{blok.label}</Link>
    </div>
  );
};

export default Button;
