const coffees = [
  { name: "Espresso", price: "$4.50", img: "/images/coffee1.jpg" },
  { name: "Cappuccino", price: "$5.20", img: "/images/coffee2.jpg" },
  { name: "Latte", price: "$5.00", img: "/images/coffee3.jpg" },
  { name: "Mocha", price: "$5.80", img: "/images/coffee4.jpg" },
  { name: "Macchiato", price: "$5.30", img: "/images/coffee5.jpg" },
  { name: "Cold Brew", price: "$4.90", img: "/images/coffee6.jpg" },
  { name: "Caramel Frappe", price: "$6.10", img: "/images/coffee7.jpg" },
  { name: "Iced Latte", price: "$5.40", img: "/images/coffee8.jpg" },
  { name: "Hazelnut Brew", price: "$5.60", img: "/images/coffee9.jpg" },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-[#2E4E3F] text-[#F7E8D0] text-center px-6">
      <h2 className="text-4xl font-bold mb-10">Our Signature Brews</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coffees.map((coffee) => (
          <div key={coffee.name} className="bg-[#1f352c] p-6 rounded-2xl shadow-md hover:scale-105 transition-all">
            <img src={coffee.img} alt={coffee.name} className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h3 className="text-2xl font-semibold mb-2">{coffee.name}</h3>
            <p className="text-[#C6A982] text-lg">{coffee.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
