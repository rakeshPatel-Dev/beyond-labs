import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-6 backdrop-blur-md bg-black/60 border-b border-white/5">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image loading='eager' src="/logo/logo dark.svg" alt="Beyond Labs" width={140} height={36} className="h-15 w-auto" />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
        <Link href="#features" className="hover:text-white transition-colors">Services</Link>
        <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
        <Link href="#about" className="hover:text-white transition-colors">About</Link>
        <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="#contact" className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white transition-colors">
          Contact
        </Link>
        <Link href="#get-started" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
          Get Started
        </Link>
      </div>
    </header>
  );
}
