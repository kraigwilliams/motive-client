import styled from "styled-components";

export const colors = {
  coral: "#EB9C82",
  // coral: "#ff9875",
  // coral: "#FFE1DA",
  teal: "#B9E3C6",
  offwhite: "#C4C4C4",
  white: "#ffffff",
  black: "#303838",
  accessiblegrey: "#21242B",
  darkgrey: "#424B54",
  darkergrey: "#303838",
  // slategrey: "#829191",
  slategrey: "#a9b2b2",
  lightblue: "#7AD8E9",
  blue: "#198A9E",
  paleblue: "#93B2BF",
};

export const PageWrapper = styled.div`
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : colors.darkgrey)};
  margin: 0;
  text-align: ${({ textalign }) => (textalign ? textalign : "")};

  min-height: 100vh;

  @media (min-width: 700px) {
    padding: ${({ padding }) => (padding ? padding : "0px")};
    background-color: ${({ bgcolorDesktop }) =>
      bgcolorDesktop ? bgcolorDesktop : colors.offwhite};
  }
`;
