import MyButton from "../components/MyButton/mybutton";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  component: MyButton,
  title: "MyButton Component",
};

export const buttons = () => (
  <div>
    <MyButton
      handleClick={action("Primary Button Pressed")}
      _class="primary-btn"
    />
    <MyButton
      handleClick={action("Secondary Button Pressed")}
      _class="secondary-btn"
    />
  </div>
);

export const primaryBtn = () => (
  <MyButton
    handleClick={action("Primary Button Pressed")}
    _class="primary-btn"
  />
);

export const secondaryBtn = () => (
  <MyButton
    handleClick={action("Secondary Button Pressed")}
    _class="secondary-btn"
  />
);
