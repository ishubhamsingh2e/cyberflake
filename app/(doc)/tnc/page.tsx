import React from "react";

async function getTNC() {
    const res = await fetch("https://api.cyberflake.in/docs/tnc/", {
        cache: "no-store",
    });

    const data = await res.json();
    return data;
}

async function TNC() {
    const data = await getTNC();
    return (
        <div
            className="markdown"
            dangerouslySetInnerHTML={{
                __html: data.tnc,
            }}
        ></div>
    );
}

export default TNC;
