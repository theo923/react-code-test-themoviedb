import React from "react";
import { shallow } from "enzyme";
import { findJSXByAttr } from "./testUtils";

import Home from "../components/Home";

const setup = (props = {}, state = null) => {
    return shallow(<Home {...props} />);
};

test("check if Home runs successfully", () => {
    const wrapper = setup();
});

test("check if component-home runs successfully", () => {
    const wrapper = setup();
    const Home = findJSXByAttr(wrapper, "component-home");
    expect(Home.length).toBe(1);
});
