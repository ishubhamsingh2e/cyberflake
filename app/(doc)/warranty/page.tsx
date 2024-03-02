import { apiClientServer } from "@/lib/localrequests";
import React from "react";

async function Warranty() {
    const data = await apiClientServer.getWarranty();
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
