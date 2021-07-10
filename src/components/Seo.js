import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title }) => {
    return (
        <div className="application">
            <Helmet>
                <title>{title? title : ""}</title>
            </Helmet>
         </div>
    );
};
export default Seo