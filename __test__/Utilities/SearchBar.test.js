import React from "react";
import { shallow } from "enzyme";
import { findJSXByAttr } from "../testUtils";

import SearchBar from "../../components/Utilities/SearchBar";

const setup = (props = {}, state = null) => {
    return shallow(<SearchBar {...props} />);
};

test("check if SearchBar runs successfully", () => {
    const wrapper = setup();
});

test("check if component-searchBar runs successfully", () => {
    const wrapper = setup();
    const SearchBar = findJSXByAttr(wrapper, "component-searchBar");
    expect(SearchBar.length).toBe(1);
});
