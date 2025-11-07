import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-[#2E4E3F] text-[#F7E8D0] text-center px-8">
      <h2 className="text-4xl font-bold mb-10">Contact Us</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div className="bg-[#1f352c] p-8 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition">
          <Mail size={36} className="mb-4 text-[#C6A982]" />
          <p>starbrew.ai@gmail.com</p>
        </div>

        <div className="bg-[#1f352c] p-8 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition">
          <Phone size={36} className="mb-4 text-[#C6A982]" />
          <p>+91 98765 43210</p>
        </div>

        <div className="bg-[#1f352c] p-8 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition">
          <MapPin size={36} className="mb-4 text-[#C6A982]" />
          <p>Lucknow, India</p>
        </div>
      </div>
    </section>
  );
}
