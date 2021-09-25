import React from "react";
import { childNode } from "../interface/interface";

const Layout = (props: childNode): JSX.Element => {
    return (
        <div>
            <div data-test="component-layout" className="layout">
                <div />
                <div style={{ maxWidth: "1300px" }}>
                    <div className="card bordered">
                        <div className="card-body">{props.children}</div>
                    </div>
                </div>
                <div />
            </div>
        </div>
    );
};

export default Layout;
