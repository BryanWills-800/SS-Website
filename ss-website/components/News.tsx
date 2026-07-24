import React from "react";

type NewsItem = {
    date: string;
    title: string;
    text: string;
    link?: string;
};

const bulletins: NewsItem[] = [
    {
        date: "24/07/2026",
        title: "Join Us",
        text: "We are a club dedicated to the design and fabrication of Integrated Circuits and Silicon Technology. Interested? Scan the QR code to join our WhatsApp group for updates on workshops, competitions, and opportunities to work on cutting-edge chip design projects.",
        link: "/join-us",
    },
    {
        date: "23/07/2026",
        title: "Join Us",
        text: "We are a club dedicated to the design and fabrication of Integrated Circuits and Silicon Technology. Interested? Scan the QR code to join our WhatsApp group for updates on workshops, competitions, and opportunities to work on cutting-edge chip design projects.",
        link: "/join-us",
    },
    {
        date: "22/07/2026",
        title: "Join Us",
        text: "We are a club dedicated to the design and fabrication of Integrated Circuits and Silicon Technology. Interested? Scan the QR code to join our WhatsApp group for updates on workshops, competitions, and opportunities to work on cutting-edge chip design projects.",
        link: "/join-us",
    },
    {
        date: "21/07/2026",
        title: "Join Us",
        text: "We are a club dedicated to the design and fabrication of Integrated Circuits and Silicon Technology. Interested? Scan the QR code to join our WhatsApp group for updates on workshops, competitions, and opportunities to work on cutting-edge chip design projects.",
        link: "/join-us",
    },
];

function NewsItemCard({ date, title, text, link }: NewsItem) {
    const content = (
        <div className="home-newsbulletin__item">
            <p className="home-newsbulletin__item__date">{date}</p>
            <p className="home-newsbulletin__item__title">{title}</p>
            <p className="home-newsbulletin__item__text">{text}</p>
        </div>
    );

    return link ? <a href={link}>{content}</a> : content;
}

export default function News() {
    return (
        <div className="home-newsbulletin">
            <p className="home-newsbulletin__title">News Bulletin</p>

            <div className="home-newsbulletin__content">
                {bulletins.map((item) => (
                    <NewsItemCard key={item.title + item.date} {...item} />
                ))}
            </div>
        </div>
    );
}