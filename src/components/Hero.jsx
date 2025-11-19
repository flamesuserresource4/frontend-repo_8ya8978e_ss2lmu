import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* Centered heading */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
            Social Icons in Motion
          </h1>
          <p className="mt-4 text-base md:text-lg text-blue-100/90 max-w-xl mx-auto">
            A playful 3D animation of inflatable social media app icons, tumbling and bouncing around the screen.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
