import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { colors } from "../constants";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";

export const Button = React.forwardRef(({ className, ...props }, ref) => {
  return <button className={cx("Button", className)} ref={ref} {...props} />;
});

export const AngleDownButton = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <button className={cx("Button", className)} ref={ref} {...props}>
        <FontAwesomeIcon icon="angle-down" />
      </button>
    );
  }
);

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
  40% {transform: translateY(-10px);} 
  60% {transform: translateY(-5px);} 
}
`;

export const AngleDown = styled(AngleDownButton)`
  background: transparent;
  color: ${({ color }) => (color ? color : colors.slategrey)};
  border: none;
  font-size: 1.2em;
  z-index: 11;
  animation: ${bounce} 2s linear infinite;
  :hover {
    cursor: pointer;
    color: ${colors.white};
  }
`;

export const GoBackButton = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={cx("Button", className)}
      ref={ref}
      {...props}
      aria-label="Go back"
    >
      <FontAwesomeIcon icon="arrow-left" />
    </button>
  );
});

export const GoBack = styled(GoBackButton)`
  background: transparent;
  color: ${({ color }) => (color ? color : colors.darkgrey)};
  border: none;
  font-size: 1em;
  text-align: left;
  align-self: left;
  margin: ${({ margin }) => (margin ? margin : "")};
  z-index: 11;
  
  :hover {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    /* margin: ${({ margin }) => (margin ? "30px 0px 22px 30px" : "")}; */
    margin: ${({ margin }) => (margin ? margin : "30px 0px 30px 30px")};
    /* height: 20px; */
  } 
`;

export const ConfirmDeleteButton = styled(Button)`
  display: block;
  border: 1px solid ${({ color }) => color || colors.offwhite};
  color: ${({ color }) => color || colors.darkgrey};
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  margin-top: ${({ margintop }) => margintop || "15px"};
  background-color: ${({ backgroundColor }) => backgroundColor || colors.coral};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  :hover {
    cursor: pointer;
    color: ${({ disabled }) => !disabled && colors.blue};
    border-color: ${({ disabled }) => !disabled && colors.blue};
  }
`;

export const FormButton = styled(Button)`
  border: 2px solid ${({ color }) => color || colors.offwhite};
  color: ${({ color }) => color || colors.offwhite};
  padding: 10px;
  width: fit-content;
  margin: auto;
  border-radius: 30px;
  font-size: 16px;
  margin-top: ${({ margintop }) => margintop || "40px"};
  /* background-color: ${({ backgroundcolor }) =>
    backgroundcolor || colors.slategrey}; */
    background: transparent;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  display: ${({ shared }) => (shared ? shared : "block")};
  
  :hover {
    cursor: pointer;
    color: ${({ disabled }) => !disabled && colors.teal};
    border-color: ${({ disabled }) => !disabled && colors.teal};
  }
  :focus {
    border: ${({ focusbordercolor }) =>
      focusbordercolor || `2px solid  ${colors.teal}`};
    color: ${({ focuscolor }) => focuscolor || colors.teal};
  }
`;

const Add = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={cx("Button", className)}
      ref={ref}
      {...props}
      aria-label="Click to add"
    >
      <NavLink to={props.to} className="button-link" aria-label="Click to add">
        <ReactTooltip
          textColor={colors.darkgrey}
          backgroundColor={colors.teal}
          place="left"
          effect="solid"
        />
        <FontAwesomeIcon icon="plus" />
      </NavLink>
    </button>
  );
});

export const AddButton = styled(Add)`
  color: ${({ color }) => (color ? color : colors.coral)};
  background: transparent;
  border: none;
  padding: ${({ padding }) => (padding ? padding : "5px")};
  margin-left: ${({ marginleft }) => (marginleft ? marginleft : "10px")};
  margin-right: ${({ marginright }) => (marginright ? marginright : "0px")};
  font-size: 1em;
  height: 28px;
  width: 28px;

  .button-link {
    color: ${({ color }) => (color ? color : colors.coral)};
  }

  :hover {
    cursor: pointer;
    font-size: 1.1em;
  }
`;

const AddConnect = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx("Button", className)} ref={ref} {...props}>
      <FontAwesomeIcon icon="plus" />
    </button>
  );
});

export const AddConnection = styled(AddConnect)`
  color: ${({ color }) => (color ? color : colors.coral)};
  background: transparent;
  border: none;
  padding: 5px;
  margin-left: ${({ marginleft }) => (marginleft ? marginleft : "10px")};
  margin-right: ${({ marginright }) => (marginright ? marginright : "0px")};
  font-size: 1em;

  .button-link {
    color: ${({ color }) => (color ? color : colors.coral)};
  }

  :hover {
    cursor: pointer;
    font-size: 1.1em;
  }
`;

const Delete = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={cx("Button", className)}
      ref={ref}
      {...props}
      aria-label="Delete"
    >
      <FontAwesomeIcon icon="minus" />

      <ReactTooltip
        textColor={colors.darkgrey}
        backgroundColor={colors.teal}
        place="left"
        effect="solid"
      />
    </button>
  );
});

export const DeleteButton = styled(Delete)`
  color: ${({ color }) => (color ? color : colors.coral)};
  background: transparent;
  border: none;
  padding: 5px;
  text-align: center;
  font-size: 1em;
  display: ${({ shared }) => (shared ? shared : "block")};
  /* margin-bottom: 5px; */
  margin-right: ${({ marginright }) => (marginright ? marginright : "0px")};

  .button-link {
    color: ${({ color }) => (color ? color : colors.coral)};
  }
  :hover {
    cursor: pointer;
    font-size: 1.1em;
  }

  @media (min-width: 600px) {
    margin-right: ${({ marginright }) => (marginright ? marginright : "30px")};
  }
`;

const Share = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={cx("Button", className)}
      ref={ref}
      {...props}
      aria-label="Share"
    >
      <NavLink to={props.to} className="button-link" aria-label="Share">
        <ReactTooltip
          textColor={colors.darkgrey}
          backgroundColor={colors.teal}
          place="left"
          effect="solid"
        />
        <FontAwesomeIcon icon="share" />
      </NavLink>
    </button>
  );
});

export const ShareButton = styled(Share)`
  color: ${({ color }) => (color ? color : colors.coral)};
  background: transparent;
  border: none;
  padding: 5px;
  text-align: center;
  font-size: 1em;
  display: ${({ shared }) => (shared ? shared : "block")};
  margin-left: 0px;
  margin-right: ${({ marginright }) => (marginright ? marginright : "0px")};
  .button-link {
    color: ${({ color }) => (color ? color : colors.coral)};
  }
  :hover {
    cursor: pointer;
    font-size: 1.1em;
  }

  @media (min-width: 600px) {
    margin-right: ${({ marginright }) => (marginright ? marginright : "30px")};
  }
`;

export default { Button, DeleteButton };
