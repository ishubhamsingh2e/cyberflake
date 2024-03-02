import { apiClientServer } from "@/lib/localrequests";
import React from "react";

async function TNC() {
    const data = await apiClientServer.getTNC();
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
