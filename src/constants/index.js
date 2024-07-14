import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, accounts, tax1, tax2, gst, tds, finance, wealth, company } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

// export const services = [
//     {
//         imgURL: truckFast,
//         label: "Free shipping",
//         subtext: "Enjoy seamless shopping with our complimentary shipping service."
//     },
//     {
//         imgURL: shieldTick,
//         label: "Secure Payment",
//         subtext: "Experience worry-free transactions with our secure payment options."
//     },
//     {
//         imgURL: support,
//         label: "Love to help you",
//         subtext: "Our dedicated team is here to assist you every step of the way."
//     },
// ];

export const services =
    [
        {
            id: 1,
            title: "GST Returns & Consultation",
            description: "Navigate the complexities of GST (Goods and Services Tax) seamlessly with our expert GST returns filing and consultation services. Our team of GST specialists provides comprehensive support, from GST registration and return filing to compliance advisory and representation. Whether you’re a small business or a large corporation, we tailor our services to meet your specific GST requirements and ensure compliance with regulatory guidelines. Trust us to handle your GST matters efficiently, allowing you to focus on growing your business.",
            imgURL: gst,
        },
        {
            id: 2,
            title: "Tax Planning & Advisory",
            description: "Navigate the complexities of the tax landscape with confidence and ease with our specialized tax planning and advisory services. Our team of seasoned tax professionals is dedicated to minimising your tax liabilities while maximising your returns. From proactive tax planning strategies to expert advisory services, we provide comprehensive support tailored to your unique financial situation and goals. With our guidance, you can optimise your tax efficiency, mitigate risks, and achieve long-term financial success. Trust us to be your strategic partner in tax planning and advisory.",
            imgURL: tax2,
        },
        {
            id: 3,
            title: "Financial Modelling",
            description: "Unlock the potential of your financial future with our comprehensive financial modelling services. Our team of experts utilizes advanced techniques and industry-leading software to develop accurate and insightful financial models tailored to your specific needs. Whether you’re analyzing investment opportunities, planning for growth, or assessing risk, our models provide the clarity and precision you need to make informed decisions with confidence. Partner with us to optimize your financial strategy and achieve your goals.",
            imgURL: finance,

        },
        {
            id: 4,
            title: "TDS & TCS Compliance",
            description: "Stay compliant with TDS (Tax Deducted at Source) and TCS (Tax Collected at Source) regulations effortlessly with our comprehensive compliance services. Our team of experts keeps you up-to-date with the latest regulatory changes and ensures timely and accurate compliance with TDS and TCS requirements. From TDS deductions and filings to TCS collections and remittances, we handle all aspects of compliance, allowing you to focus on your core business activities. Partner with us to simplify TDS and TCS compliance and avoid penalties and regulatory hassles.",
            imgURL: tds,

        },
        {
            id: 5,
            title: "Company & Firm Incorporation",
            description: "Streamline the process of company and firm incorporation with our expert guidance and support. Our team of professionals specializes in company formation services, guiding you through every step of the incorporation process with ease. From choosing the right business structure to completing necessary documentation and compliance requirements, we ensure a smooth and efficient incorporation process. With our expertise and attention to detail, you can establish your company or firm with confidence and start your business journey on the right foot.",
            imgURL: company,

        },
        {
            id: 6,
            title: "Wealth Management",
            description: "Achieve your financial aspirations and secure your future with our personalized wealth management solutions. Our experienced wealth management advisors work closely with you to understand your goals, assess your risk tolerance, and develop a customized wealth management strategy. From investment management to retirement planning and estate planning, we provide comprehensive services designed to optimize your financial well-being. With our expertise and personalized approach, you can navigate market fluctuations with confidence and achieve lasting financial success.",
            imgURL: wealth,
        }
    ]

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
