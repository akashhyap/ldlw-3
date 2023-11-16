import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${(props) => props?.backgroundColor};
  margin-top: ${(props) => props?.marginTop};
  margin-bottom: ${(props) => props?.marginBottom};
  padding-top: ${(props) => props?.paddingTop};
  padding-bottom: ${(props) => props?.paddingBottom};

  @media (min-width: 800px) {
    padding-left: ${(props) => props?.paddingLeft};
    padding-right: ${(props) => props?.paddingRight};
  }
`;

const Section = ({ blok }) => {
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
  let maxWidth = (val) => {
    switch (blok.maxWidth) {
      case "max-w-xs":
        return "maxWXs";
        break;
      case "max-w-sm":
        return "maxWSm";
        break;
      case "max-w-2xl":
        return "maxW2Xl";
        break;
      case "max-w-3xl":
        return "maxW3Xl";
        break;
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

  return (
    <Wrapper
      backgroundColor={blok?.background_color?.color}
      marginTop={blok?.marginTop}
      marginBottom={blok?.marginBottom}
      paddingTop={blok?.paddingTop}
      paddingBottom={blok?.paddingBottom}
      paddingLeft={blok?.paddingLeft}
      paddingRight={blok?.paddingRight}
      {...storyblokEditable(blok)}
    >
      <div
        className={`section_block ${maxWidth(blok?.maxWidth)} ${
          blok?.grid ? "grid gap-10 " + grid(blok?.grid) : ""
        } ${alignItems(blok?.itemAlign)}`}
      >
        {blok?.body?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Section;
