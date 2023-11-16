import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Blog = ({ blok }) => {
  // console.log("blog", blok);
  let maxWidth = (val) => {
    switch (blok.maxWidth) {
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
    <div className={`${maxWidth(blok.maxWidth)} py-10`} {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </div>
  );
};

export default Blog;
