import React from "react";

async function getPrivacyPolicy() {
    const res = await fetch("https://api.cyberflake.in/docs/privacy-policy/", {
        cache: "no-store",
    });

    const data = await res.json();
    return data;
}

async function PrivacyPolicy() {
    const data = await getPrivacyPolicy();
    return (
        <div
            className="markdown"
            dangerouslySetInnerHTML={{
                __html: data.privacy_policy,
            }}
        ></div>
    );
}

export default PrivacyPolicy;
