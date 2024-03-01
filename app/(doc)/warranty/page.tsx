import React from "react";

async function getTNC() {
    const res = await fetch("https://api.cyberflake.in/docs/warranty/", {
        cache: "no-store",
    });

    const data = await res.json();
    return data;
}

async function Warranty() {
    const data = await getTNC();
    return (
        <div
            className="markdown"
            dangerouslySetInnerHTML={{
                __html: data.warranty,
            }}
        ></div>
    );
}

export default Warranty;
