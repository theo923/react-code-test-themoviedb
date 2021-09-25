import React from "react";
import { shallow } from "enzyme";
import { findJSXByAttr } from "./testUtils";

import MovieItem from "../components/MovieItem";

const setup = (props = {}, state = null) => {
    return shallow(<MovieItem {...props} />);
};

test("check if MovieItem runs successfully", () => {
    const wrapper = setup();
});

test("check if component-movieItem runs successfully", () => {
    const wrapper = setup();
    const MovieItem = findJSXByAttr(wrapper, "component-movieItem");
    expect(MovieItem.length).toBe(1);
});
