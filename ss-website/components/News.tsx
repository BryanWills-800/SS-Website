"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

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
    const contentRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollState = useCallback(() => {
        const content = contentRef.current;
        if (!content) return;

        setCanScrollLeft(content.scrollLeft > 0);
        setCanScrollRight(
            content.scrollLeft + content.clientWidth < content.scrollWidth - 1,
        );
    }, []);

    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        updateScrollState();
        content.addEventListener("scroll", updateScrollState, { passive: true });
        window.addEventListener("resize", updateScrollState);

        return () => {
            content.removeEventListener("scroll", updateScrollState);
            window.removeEventListener("resize", updateScrollState);
        };
    }, [updateScrollState]);

    const scrollByCard = (direction: "left" | "right") => {
        const content = contentRef.current;
        const firstCard = content?.firstElementChild;
        if (!content || !firstCard) return;

        const nextCard = firstCard.nextElementSibling;
        const gap = nextCard
            ? Number.parseFloat(getComputedStyle(nextCard).marginLeft) || 0
            : 0;
        const distance = firstCard.getBoundingClientRect().width + gap;

        content.scrollBy({
            left: direction === "right" ? distance : -distance,
            behavior: "smooth",
        });
    };

    return (
        <div className="home-newsbulletin">
            <div className="home-newsbulletin__header">
                <p className="home-newsbulletin__title">News Bulletin</p>
                <div className="home-newsbulletin__controls">
                    <button
                        type="button"
                        className="home-newsbulletin__arrow"
                        aria-label="Show previous news bulletin"
                        disabled={!canScrollLeft}
                        onClick={() => scrollByCard("left")}
                    >
                        <span aria-hidden="true">&larr;</span>
                    </button>
                    <button
                        type="button"
                        className="home-newsbulletin__arrow"
                        aria-label="Show next news bulletin"
                        disabled={!canScrollRight}
                        onClick={() => scrollByCard("right")}
                    >
                        <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>
            </div>

            <div ref={contentRef} className="home-newsbulletin__content">
                {bulletins.map((item) => (
                    <NewsItemCard key={item.title + item.date} {...item} />
                ))}
            </div>
        </div>
    );
}