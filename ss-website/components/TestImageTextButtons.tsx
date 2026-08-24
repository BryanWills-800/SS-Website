"use client";

import Image from "next/image";
import { useState } from "react";

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

    const activeContent = previewContent ?? selectedContent ?? "image";
    const selectedItem = items.find((item) => item.id === activeContent);
    const toggleSelectedContent = (itemId: string) => {
        setSelectedContent((current) => (current === itemId ? null : itemId));
    };

    return (
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 p-6">
            <div className="flex flex-col justify-center items-start space-y-2">
                <h2 className="mb-2 font-bold text-xl">
                    {heading}
                </h2>

                {items.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleSelectedContent(item.id)}
                        onMouseEnter={() => setPreviewContent(item.id)}
                        onMouseLeave={() => setPreviewContent(null)}
                        onFocus={() => setPreviewContent(item.id)}
                        onBlur={() => setPreviewContent(null)}
                        className={`px-4 py-2 rounded text-white transition-colors ${activeContent === item.id
                            ? "bg-green-600 font-semibold"
                            : "bg-green-500 hover:bg-green-600"
                            }`}
                    >
                        {item.buttonLabel}
                    </button>
                ))}
            </div>

            <div className="flex justify-center items-center w-full aspect-[640/420]">
                {activeContent === "image" && (
                    <Image
                        src={defaultImageSrc}
                        alt={defaultImageAlt}
                        width={640}
                        height={420}
                        className="w-full h-full object-contain"
                    />
                )}

                {selectedItem && (
                    <div className="flex flex-col justify-center items-start p-6 border-2 border-red-500 w-full h-full">
                        <span className="font-medium text-zinc-500 text-xs uppercase tracking-wider">{selectedItem.metaText}</span>
                        <h3 className="mt-1 font-bold text-xl">{selectedItem.title}</h3>
                        <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-base">{selectedItem.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {selectedItem.tags.map((tag) => (
                                <span key={tag} className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 border border-zinc-200 dark:border-zinc-700 rounded text-xs">{tag}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
