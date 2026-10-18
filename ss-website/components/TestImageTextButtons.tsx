"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SWAP_DELAY_MS = 140;

export type TestImageTextButtonsItem = {
    id: string;
    buttonLabel: string;
    title: string;
    description: string;
    metaText: string;
    tags: string[];
};

type TestImageTextButtonsProps = {
    items: TestImageTextButtonsItem[];
    defaultImageSrc?: string;
    defaultImageAlt?: string;
    heading?: string;
};

export default function TestImageTextButtons({
    items,
    defaultImageSrc = "/image_chip.avif",
    defaultImageAlt = "Default preview image",
    heading = "Select content",
}: TestImageTextButtonsProps) {
    const [selectedContent, setSelectedContent] = useState<string | null>(null);
    const [previewContent, setPreviewContent] = useState<string | null>(null);
    const swapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const activeContent = previewContent ?? selectedContent ?? "image";
    const selectedItem = items.find((item) => item.id === activeContent);

    const clearSwapTimer = () => {
        if (!swapTimerRef.current) return;
        clearTimeout(swapTimerRef.current);
        swapTimerRef.current = null;
    };

    const scheduleSwap = (updateFn: () => void) => {
        clearSwapTimer();
        swapTimerRef.current = setTimeout(() => {
            updateFn();
            swapTimerRef.current = null;
        }, SWAP_DELAY_MS);
    };

    const toggleSelectedContent = (itemId: string) => {
        scheduleSwap(() => {
            setSelectedContent((current) => (current === itemId ? null : itemId));
        });
    };

    useEffect(() => {
        return () => {
            clearSwapTimer();
        };
    }, []);

    return (
        <div className="test-image-buttons">
            <div className="test-image-buttons__controls">
                <div className="test-image-buttons__eyebrow">Content index</div>
                <h2 className="test-image-buttons__heading">{heading}</h2>
                <p className="test-image-buttons__instruction">
                    Hover to preview. Select a module to pin its details.
                </p>

                <div className="test-image-buttons__list">
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            aria-pressed={selectedContent === item.id}
                            onClick={() => toggleSelectedContent(item.id)}
                            onMouseEnter={() => scheduleSwap(() => setPreviewContent(item.id))}
                            onMouseLeave={() => scheduleSwap(() => setPreviewContent(null))}
                            onFocus={() => scheduleSwap(() => setPreviewContent(item.id))}
                            onBlur={() => scheduleSwap(() => setPreviewContent(null))}
                            className={`group test-image-buttons__button ${activeContent === item.id
                                ? "test-image-buttons__button--active"
                                : ""
                                }`}
                        >
                            <span className="test-image-buttons__button-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>{item.buttonLabel}</span>
                            <span className="test-image-buttons__button-arrow" aria-hidden="true">↗</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="test-image-buttons__preview">
                {activeContent === "image" && (
                    <Image
                        src={defaultImageSrc}
                        alt={defaultImageAlt}
                        width={640}
                        height={420}
                        className="test-image-buttons__image"
                        loading="eager"
                        priority
                    />
                )}

                {selectedItem && (
                    <div className="test-image-buttons__content">
                        <span className="test-image-buttons__meta">{selectedItem.metaText}</span>
                        <h3 className="test-image-buttons__title">{selectedItem.title}</h3>
                        <p className="test-image-buttons__description">{selectedItem.description}</p>
                        <div className="test-image-buttons__tags">
                            {selectedItem.tags.map((tag) => (
                                <span key={tag} className="test-image-buttons__tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
