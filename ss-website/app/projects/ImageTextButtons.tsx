"use client";

import { useState } from "react";

export default function ImageTextButton() {
    const [text, setText] = useState("Click a button");

    return (
        <div className="space-y-4 p-6">
            <h1 className="font-bold text-2xl">{text}</h1>

            <div className="space-x-2">
                <button
                    onClick={() => setText("Hello!")}
                    className="bg-blue-500 px-4 py-2 rounded text-white"
                >
                    Say Hello
                </button>

                <button
                    onClick={() => setText("Welcome to Next.js")}
                    className="bg-green-500 px-4 py-2 rounded text-white"
                >
                    Welcome
                </button>

                <button
                    onClick={() => setText("Goodbye!")}
                    className="bg-red-500 px-4 py-2 rounded text-white"
                >
                    Goodbye
                </button>
            </div>
        </div>
    );
}