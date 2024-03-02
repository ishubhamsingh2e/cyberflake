import { apiClientServer } from "@/lib/localrequests";
import React from "react";

async function PrivacyPolicy() {
    const data = await apiClientServer.getPrivacyPolicy();
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
