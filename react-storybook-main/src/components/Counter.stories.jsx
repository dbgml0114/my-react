import React from 'react';
import "../components/Practice.scss";

import Counter from "./Counter";

export default {
  component: Counter,
  title: "Counter",
};


const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
 optionName: "샷추가",
};


