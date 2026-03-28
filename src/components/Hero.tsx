export default function Hero() {
  return (
    <section className="flex items-center justify-between px-10 py-16">

      {/* Left Content */}
      <div className="flex flex-col gap-6 max-w-xl">

        {/* Badge Pill */}
        <div className="flex items-center gap-2 w-fit">
          <span className="bg-gray-900 text-white text-sm px-4 py-1 rounded-full font-medium">
            Montr AI
          </span>
          <span className="text-sm text-gray-600">
            Agentic Marketing Platform →
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl text-black font-bold leading-tight">
          The First{" "}
          <span className="text-blue-500">Agentic <br /> AI Platform</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Perform tasks autonomously across all features. Automate
          your marketing workflows and save thousands of hours for
          your agency, startup, or SMB.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-6">
          <button className="bg-gray-700 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors">
            Try It Free →
          </button>
          <button className="text-gray-800 font-medium hover:opacity-70 transition-opacity">
            Features →
          </button>
        </div>

      </div>

      {/* Right Image */}
      <div className="w-1/3 flex items-center justify-center animate-float">
        <img
          src="/hero.png"
          alt="hero"
          className="w-full max-w-2xl object-cover scale-110"
        />
      </div>

    </section>
  );
}