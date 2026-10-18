import React from 'react'
import Image from 'next/image'

export default function Welcome() {
    return (
        <div className="home-title">
            <p className="home-title__greetings">Welcome to</p>
            <h1 className="home-title__heading">Silicon Society</h1>
            <h2 className="home-title__subheading">BITS Pilani</h2><br />
            <Image
                className="home-title__image"
                src="/image-1.jpeg"
                alt="Silicon Society Logo"
                width={800}
                height={800}
                loading="eager"
                priority
            />
        </div>
    )
}