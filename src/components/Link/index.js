import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;

// https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea