import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const OfferComparison = ({ blok }) => {
  let maxWidth = (val) => {
    switch (blok?.maxWidth) {
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
  return (
    <div
      className={`md:px-5 xl:px-0 ${maxWidth(blok?.maxWidth)} ${
        blok?.grid ? "grid gap-8 " + grid(blok?.grid) : ""
      }`}
      {...storyblokEditable(blok)}
    >
      {blok?.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default OfferComparison;
