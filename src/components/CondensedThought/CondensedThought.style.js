import styled from "styled-components";
import { colors } from "../constants";
import { Link } from "react-router-dom";

export const Thought = styled.div`
  border: 2px solid ${colors.lightblue};
  padding: 10px 20px 10px 20px;
  color: ${colors.offwhite};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px auto;
  border-radius: 30px;
  min-width: fit-content;
  width: 60%;
  .fade-appear {
    opacity: 0;
  }

  .fade-appear-active {
    opacity: 0;
    transition: all 500ms linear;
  }

  .fade-enter-active {
    opacity: 1;
    transition: all 500ms linear;
  }

  .fade-enter-done {
    opacity: 1;
  }

  :hover {
    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 800px) {
    width: 60%;
  }

  @media (min-width: 700px) {
    width: 60%;
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

export const ThoughtTitle = styled(Link)`
  color: ${colors.offwhite};
  font-size: 16px;
  text-decoration: none;
`;
