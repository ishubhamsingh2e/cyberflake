interface URL {
    title: string;
    url: string;
}

interface Footer {
    title: string;
    url: URL[];
}

const footerData: Footer[] = [
    {
        title: "Company",
        url: [
            { title: "About Us", url: "/about-us" },
            { title: "Contact Us", url: "/contact-us" },
            { title: "Careers", url: "/careers" },
            { title: "Blog", url: "/blog" }
        ]
    },
    {
        title: "Links",
        url: [
            { title: "Payment", url: "/payment" },
            { title: "Shipping", url: "/shipping" },
            { title: "Cancellation & Returns", url: "/cancellation-returns" },
            { title: "FAQ", url: "/faq" }
        ]
    },
    {
        title: "Policy",
        url: [
            { title: "Return Policy", url: "/return-policy" },
            { title: "Terms Of Use", url: "/terms-of-use" },
            { title: "Security", url: "/security" },
            { title: "Privacy", url: "/privacy" }
        ]
    },
];

export default footerData;
