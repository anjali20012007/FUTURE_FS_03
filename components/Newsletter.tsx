export default function Newsletter() {
  return (
    <section className="bg-[#2E4E3F] text-[#F7E8D0] py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Brew Club</h2>
      <p className="mb-6">Get weekly coffee updates & design inspirations ☕</p>

      <form className="flex flex-col sm:flex-row justify-center items-center gap-3 px-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-full sm:rounded-l-full sm:rounded-r-none w-full sm:w-64 bg-[#F7E8D0] text-[#2E4E3F] placeholder-[#8B7E6A] outline-none focus:ring-2 focus:ring-[#C6A982] transition-all"
          required
        />
        <button className="bg-[#F7E8D0] text-[#2E4E3F] px-10 py-3 rounded-full font-semibold hover:bg-[#C6A982] transition">
          Subscribe
        </button>
      </form>
    </section>
  );
}
