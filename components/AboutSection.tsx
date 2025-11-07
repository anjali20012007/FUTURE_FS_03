export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-cover bg-center text-[#2E4E3F] px-8"
      style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
    >
     
      <div className="absolute inset-0 bg-[#F7E8D0]/90"></div>

      
      <div className="relative max-w-5xl mx-auto z-10 text-center md:text-left">
        <h2 className="text-5xl font-extrabold mb-8 text-center md:text-left">
          About <span className="text-[#2E4E3F]">Starbrew</span>
        </h2>

        <p className="text-lg leading-8 mb-6">
          At <strong>Starbrew</strong>, coffee isn’t just a drink — it’s a
          digital experience. We are a new-age coffee brand that fuses the
          aroma of freshly brewed beans with the intelligence of modern design.
          Born from the idea that creativity can be brewed, Starbrew transforms
          the traditional café culture into a story of innovation, comfort, and
          connection.
        </p>

        <p className="text-lg leading-8 mb-6">
          Every cup we pour tells a story — of early mornings, bold ideas, and
          late-night inspirations. Our brand blends the calm of earthy tones
          with the energy of smart design, making every sip a moment of mindful
          indulgence. From sustainable sourcing to thoughtful digital presence,
          Starbrew stands for authenticity and modern craftsmanship.
        </p>

        <p className="text-lg leading-8 mb-6">
          Whether you’re working on your next big idea or just taking a break
          from the noise — Starbrew is your companion. We’re more than coffee;
          we’re the blend of human creativity and AI-driven imagination,
          designed for dreamers, thinkers, and doers.
        </p>

        <div className="mt-10">
          <a
            href="#menu"
            className="inline-block bg-[#2E4E3F] text-[#F7E8D0] px-6 py-3 rounded-full font-semibold hover:bg-green-900 transition-all"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    </section>
  );
}
