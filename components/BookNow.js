import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { InlineWidget } from "react-calendly";

const BookNow = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <div className="inline-widget">
        <InlineWidget
          url={process.env.NEXT_PUBLIC_CALENDLY}
          styles={{
            height: "1000px",
          }}
        />
      </div>
    </div>
  );
};

export default BookNow;
