import React from 'react';
import "../components/Practice.scss";

import Radio from "./Radio";

export default {
  component: Radio,
  title: "Radio",
};


const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
 optionName: "샷추가",
};


