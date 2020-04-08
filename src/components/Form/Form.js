import React from "react";
import cx from "classnames";
import styled from "styled-components";
import { colors } from "../constants";

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 22px;
  color: ${({ color }) => color || colors.teal};
  margin-top: 10px;
  @media (min-width: 700px) {
    margin-top: 10px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  /* padding: 30px; */
  background-color: ${({ bgColor }) => bgColor || colors.darkgrey};
  width: ${({ width }) => (width ? width : "100%")};
  padding: ${({ padding }) => (padding ? padding : "30px")};

  @media (min-width: 700px) {
    width: ${({ width }) => (width ? width : "60%")};
    margin: ${({ minimizedMargin }) =>
      minimizedMargin ? minimizedMargin : "auto"};
    padding: ${({ padding }) => (padding ? padding : "30px")};
    border-radius: 30px;
  }
`;

export const LoginWrapper = styled.div`
  background-color: ${colors.slategrey};
  margin: 0;
  padding: 40px;
  min-height: 100vh;

  @media (min-width: 700px) {
    background-color: ${colors.offwhite};
  }
`;

function Label({ className, ...props }) {
  return <label className={cx("Label", className)} {...props} />;
}

export const FormLabel = styled(Label)`
  color: ${(props) => (props.color ? props.color : colors.coral)};
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "auto")};
  padding: 10px 10px 10px 0px;
  margin: 10px auto 0px auto;
  font-weight: bolder;
  width: 80%;
  min-height: 100%;

  @media (min-width: 700px) {
    width: 60%;
    margin: auto;
    margin-top: 20px;
  }
`;

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={cx("Input", className)}
      type="text"
      ref={ref}
      {...props}
    />
  );
});

export const FormInput = styled(Input)`
  border: none;
  border-bottom: 2px solid ${colors.offwhite};
  padding: 10px;
  font-size: 16px;
  background-color: ${({ backgroundcolor }) =>
    backgroundcolor || "transparent"};
  color: ${({ color }) => color || colors.offwhite};
  text-align: center;
  width: 80%;
  margin-top: 10px;
  align-self: center;

  :focus {
    border-bottom: 2px solid
      ${({ borderColor }) => (borderColor ? borderColor : colors.teal)};
  }

  @media (min-width: 700px) {
    width: 60%;
    margin: 10px;
  }
`;

export function Required({ className, ...props }) {
  return (
    <span className={cx("Required", className)} {...props}>
      &#42;
    </span>
  );
}

export function Textarea({ className, ...props }) {
  return <textarea className={cx("Textarea", className)} {...props} />;
}

export const FormTextarea = styled(Textarea)`
  background: ${({ bgColor }) => (bgColor ? bgColor : colors.offwhite)};
  width: 80%;
  padding: 20px;
  font-size: 16px;
  color: ${colors.white};
  border: 2px solid ${colors.offwhite};
  border-radius: 10px;
  margin: auto;
  :focus {
    border: 2px solid ${colors.teal};
  }
  @media (min-width: 700px) {
    width: 60%;
    margin: auto;
  }
`;

export const Dropdown = styled.select`
  background: transparent;
  font-size: 16px;
  color: ${colors.white};
  width: 80%;
  padding: 10px;
  margin: auto;

  > option {
    text-align: center;
  }

  :focus {
    border: 2px solid ${colors.teal};
  }

  @media (min-width: 700px) {
    width: 60%;
    margin: auto;
  }
`;

export const DetailMessage = styled.div`
  background: transparent;
  border: 1px solid ${colors.coral};
  font-size: 16px;
  text-align: center;
  margin: 35px auto auto auto;
  padding: 10px;
  color: ${colors.white};
`;
