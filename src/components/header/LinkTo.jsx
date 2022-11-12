import React from "react";

const LinkTo = ({ external, href, src, alt }) => {
    return (

    <a className={external ? "external" : "internal"} href={href}>{alt}
    <img src={src} alt={alt} />
    </a>


    )
}

export default LinkTo;
