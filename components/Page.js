import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok }) => {
  let maxWidth = (val) => {
    switch (blok?.maxWidth) {
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
  return (
    <div className={`${maxWidth(blok?.maxWidth)}`} {...storyblokEditable(blok)}>
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
};

export default Page;