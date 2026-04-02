import {
  Code,
  Layers,
  Briefcase,
  Rocket,
  MessageSquare,
  FileText,
} from "lucide-react";
import { Navbar1 } from "../shadcnblocks-com-navbar1";

const demoData = {
  logo: {
    url: "/",
    src: "/logo/logo dark.svg",
    alt: "Beyond Labs Logo",
  },

  menu: [
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Services",
      url: "#",
      items: [
        {
          title: "Web Development",
          description: "High-performance websites built for scale and speed",
          icon: <Code className="size-5 shrink-0" />,
          url: "/services/web-development",
        },
        {
          title: "UI/UX Design",
          description: "Clean, modern, and conversion-focused interfaces",
          icon: <Layers className="size-5 shrink-0" />,
          url: "/services/ui-ux",
        },
        {
          title: "Custom Software",
          description: "Tailored systems to solve complex business problems",
          icon: <Briefcase className="size-5 shrink-0" />,
          url: "/services/software",
        },
        {
          title: "Startup MVP",
          description: "Launch your idea fast with scalable architecture",
          icon: <Rocket className="size-5 shrink-0" />,
          url: "/services/mvp",
        },
      ],
    },

    {
      title: "Work",
      url: "/projects",
    },



    {
      title: "Insights",
      url: "/blog",
    },

    {
      title: "Contact",
      url: "/contact",
    },
  ],

  mobileExtraLinks: [
    { name: "Careers", url: "/careers" },
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms", url: "/terms" },
  ],

  auth: {
    login: { text: "Get Started", url: "/contact" },
    signup: { text: "Book a Call", url: "/contact" },
  },
};

function Navbar() {
  return <Navbar1 {...demoData} />;
}

export { Navbar };