import styled from "styled-components";
import { colors } from "../constants";
import { Link } from "react-router-dom";

export const Topic = styled.div`
  border: 2px solid ${colors.blue};
  padding: 10px 20px 10px 20px;
  color: ${colors.offwhite};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px auto;
  border-radius: 10px;
  /* min-width: fit-content; */
  width: 100%;

  :hover {
    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 1000px) {
    /* min-width: fit-content; */
    width: 80%;
  }

  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const TopicTitle = styled(Link)`
  color: ${colors.offwhite};
  font-size: 16px;
  text-decoration: none;
`;

export const TopicCount = styled.p`
  color: ${colors.offwhite};
  font-size: 16px;
  margin-left: 10px;
`;
