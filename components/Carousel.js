import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

const Carousel = ({ blok }) => {
//   console.log(blok);  
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
  return (
    <div {...storyblokEditable(blok)} className="basis-full min-w-full">
      {blok?.image && <figure className="relative mb-3">
        <Image alt="" src={`${blok.image.filename}`} width={200} height={200} className={`${blok.alignImage}`}/>
      </figure>}
      {blok.quote && <div className={`${textAlign(blok.textAlign)} mb-3`}>{render(blok.quote)}</div>}
      {blok?.name && <p className={`${textAlign(blok.textAlign)}`}>{blok.name}</p>}
      {blok?.subtitle && <p className={`${textAlign(blok.textAlign)}`}>{blok.subtitle}</p>}
    </div>
  );
};

export default Carousel;
