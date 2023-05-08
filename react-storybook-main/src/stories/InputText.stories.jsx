import React from "react";

import InputText from "./InputText";

export default {
  component: InputText,
  title: "InputText",
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  field: {
    id: "1",
    title: "Test Task",
    state: "Default",
    isType: "text",
    disabled: false,
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  field: {
    ...Default.args.task,
    state: "Disabled",
    disabled: true,
  },
};
