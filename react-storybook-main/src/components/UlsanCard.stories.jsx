import React from 'react';
import "./Card.scss";

import UlsanCard from "./UlsanCard";

export default {
  component: UlsanCard,
  title: "UlsanCard",
};


const Template = (args) => <UlsanCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  src:
    "https://i.pinimg.com/564x/26/4d/84/264d84335d66e9d15737d89ab4cb193a.jpg",
  title: "울산 왕족발",
  type: "card base",
  label:
    "당일사용",
    price: "2,000"
};


export const FreeType = Template.bind({});
FreeType.args = {
  src:
    "https://i.pinimg.com/564x/26/4d/84/264d84335d66e9d15737d89ab4cb193a.jpg",
  title: "울산 왕족발",
  type: "card free",
};
