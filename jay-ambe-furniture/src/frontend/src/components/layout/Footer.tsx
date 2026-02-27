import { Phone, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-200">
      <div className="container mx-auto px-4 py-10 text-center">
        {/* Brand Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/assets/generated/logo-jay-ambe.svg"
            alt="Jay Ambe Furniture"
            className="h-9 w-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Phone Numbers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="tel:9924010722"
            className="flex items-center gap-2 text-[#111827] hover:text-[#374151] transition-colors text-sm font-medium"
          >
            <Phone size={16} className="text-[#374151] shrink-0" />
            <span>Baldevbhai D Panchal: 9924010722</span>
          </a>
          <span className="hidden sm:block text-gray-300">|</span>
          <a
            href="tel:9714893422"
            className="flex items-center gap-2 text-[#111827] hover:text-[#374151] transition-colors text-sm font-medium"
          >
            <Phone size={16} className="text-[#374151] shrink-0" />
            <span>Banty B Panchal: 9714893422</span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-2">
          <p className="text-gray-500 text-xs">
            © 2026 Jay Ambe Furniture. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center gap-1">
            Built with <Heart size={11} className="text-[#374151] fill-[#374151]" /> using{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#374151] hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
