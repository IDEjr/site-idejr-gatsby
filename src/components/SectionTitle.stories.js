import React from "react"
import SectionTitle from "./SectionTitle"

export default {
  title: "SectionTitle",
  component: SectionTitle
}

const Template = (args) => <SectionTitle {...args} />

export const WithUppertitle = Template.bind({})
WithUppertitle.args = {
    title: "OI",
    uppertitle: "HI"
}

export const WithoutUppertitle = Template.bind({})
WithoutUppertitle.args = {
    title: "OI"
}

