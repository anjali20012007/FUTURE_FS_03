import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f352c] text-[#F7E8D0] py-10 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="hover:text-[#C6A982]"><Github size={24} /></a>
        <a href="#" className="hover:text-[#C6A982]"><Linkedin size={24} /></a>
        <a href="#" className="hover:text-[#C6A982]"><Instagram size={24} /></a>
      </div>
      <p className="text-sm text-[#C6A982]/80">
        © {new Date().getFullYear()} Starbrew AI — Crafted with ☕ & 💻
      </p>
    </footer>
  );
}
