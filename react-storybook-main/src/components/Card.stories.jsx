import React from "react";

import Crad from "./Card";

export default {
  component: Crad,
  title: "Crad",
};

const Template = (args) => <Crad {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "50059",
  coverImage:
    "https://i.pinimg.com/564x/26/4d/84/264d84335d66e9d15737d89ab4cb193a.jpg",
  title: "ABOUT TIME",
  summary:
    "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  genres: null,
};
