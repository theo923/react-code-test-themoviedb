import React from "react";
import { shallow } from "enzyme";
import { findJSXByAttr } from "../testUtils";

import Sorting from "../../components/Utilities/Sorting";

const setup = (props = {}, state = null) => {
    return shallow(<Sorting {...props} />);
};

test("check if Sorting runs successfully", () => {
    const wrapper = setup();
});

test("check if component-sorting runs successfully", () => {
    const wrapper = setup();
    const Sorting = findJSXByAttr(wrapper, "component-sorting");
    expect(Sorting.length).toBe(1);
});
