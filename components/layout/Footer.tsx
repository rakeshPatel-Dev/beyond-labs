"use client";
import Image from "next/image";
import Link from "next/link";

const footerData = {
  brand: {
    logo: "/logo/logo dark.svg",
    description:
      "We build scalable, high-performance digital products for startups and businesses ready to move beyond limitations.",
    cta: {
      text: "Start a Project →",
      url: "/contact",
    },
  },

  sections: [
    {
      title: "Services",
      links: [
        { name: "Web Development", url: "/services/web-development" },
        { name: "UI/UX Design", url: "/services/ui-ux" },
        { name: "Custom Software", url: "/services/software" },
        { name: "MVP Development", url: "/services/mvp" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Case Studies", url: "/projects" },
        { name: "Insights", url: "/blog" },
        { name: "Careers", url: "/careers" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "hello@beyondlabs.dev", url: "mailto:hello@beyondlabs.dev" },
        { name: "LinkedIn", url: "#" },
        { name: "GitHub", url: "#" },
        { name: "Twitter / X", url: "#" },
      ],
    },
  ],

  bottom: {
    copyright: "Beyond Labs. All rights reserved.",
    legal: [
      { name: "Privacy", url: "/privacy" },
      { name: "Terms", url: "/terms" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#0A84FF]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-6">
            <Image
              src={footerData.brand.logo}
              alt="Beyond Labs"
              width={140}
              height={40}
              className="h-12 w-auto"
            />
          </Link>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
            {footerData.brand.description}
          </p>

          <Link
            href={footerData.brand.cta.url}
            className="inline-block text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition"
          >
            {footerData.brand.cta.text}
          </Link>
        </div>

        {/* Dynamic Sections */}
        {footerData.sections.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold text-white mb-6">
              {section.title}
            </h4>
            <ul className="flex flex-col items-start flex-wrap space-y-4">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {footerData.bottom.copyright}
        </p>

        <div className="flex items-center gap-6">
          {footerData.bottom.legal.map((item) => (
            <Link key={item.name} href={item.url} className="footer-link text-sm">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}