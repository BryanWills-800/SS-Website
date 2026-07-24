import React from 'react'
import Welcome from './Welcome'
import News from './News'

export default function Greetings({ ariaLabel }: { ariaLabel: string }) {
    return (
        <section className="home-page" aria-label={ariaLabel}>
            <div className="home-page__content">
                <div className="home-title">
                    <Welcome />
                </div>
                <News />
            </div>
        </section>
    )
}