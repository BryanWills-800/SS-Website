export default function Home() {
  return (
    <main className="home-page">
      <div className="video-bg-container" aria-hidden="true">
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="home-title">
        <h1 className="home-title__heading">Silicon Society</h1>
        <h2 className="home-title__subheading">BITS Pilani</h2>
      </div>
    </main>
  );
}
