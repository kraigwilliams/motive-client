import styled from "styled-components";
import { colors } from "../constants";

export const TopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.slategrey};
  margin: 0;
  padding: 0;
  min-height: 100vh;
  .header-btn {
    width: 28px;
    justify-content: space-between;
  }
`;

export const TopicHeader = styled.header`
  text-align: center;
  padding: 30px 30px 10px 30px;
  color: ${colors.white};
  text-align: center;
  margin: 0;
  width: 100%;
  justify-self: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 600px) {
    text-align: center;
  }
`;

export const SortWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: fit-content;
`;

export const SortLabel = styled.label`
  padding-bottom: 5px;
  color: ${colors.coral};
  margin-bottom: 5px;
  margin-left: 70%;
  margin: auto;
  font-size: 16px;
  font-weight: bolder;

  @media (min-width: 600px) {
    margin-right: auto;
    margin-bottom: 10px;
  }
`;

export const SortSelectDropdown = styled.select`
  background: transparent;
  font-size: 16px;
  color: ${colors.white};

  > option {
    font-size: 16px;
  }

  @media (min-width: 600px) {
    min-width: 30%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkgrey};
  padding: 30px;
  margin: 0;
  height: 100vh;

  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin: 10px 30px; */
    margin: 10px 0px;
    /* padding: 5px 60px; */
    padding: 5px 0px;
  }

  .topic-thoughts {
    width: 80%;
    margin: 0px auto;
  }

  @media (min-width: 600px) {
    .topic-thoughts {
      width: 70%;
    }
  }
`;

export const StyledDeleteDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  padding: 25px;
  background-color: ${colors.darkgrey};
  color: ${colors.offwhite};
  /* text-align: left; */

  @media (min-width: 600px) {
  }
`;
