import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#0168FD]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <Image src="/logo/logo light.svg" alt="Beyond Labs" width={140} height={36} className="h-8 w-auto" />
          </Link>
          <p className="text-zinc-400 text-sm mb-6 max-w-xs">
            Deliver Digital Products Faster And Seamlessly. Engineering excellence for modern businesses.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6">Resources</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-sm text-zinc-400 hover:text-[#0168FD] transition-colors">Docs</Link></li>
            <li><Link href="#" className="text-sm text-zinc-400 hover:text-[#0168FD] transition-colors">Community</Link></li>
            <li><Link href="#" className="text-sm text-zinc-400 hover:text-[#0168FD] transition-colors">Pricing</Link></li>
            <li><Link href="#" className="text-sm text-zinc-400 hover:text-[#0168FD] transition-colors">Changelog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-sm text-zinc-400 hover:text-[#0168FD] transition-colors">Blog</Link></li>
            <li><Link href="#" className="text-sm text-zinc-400 hover:text-[#0168FD] transition-colors">LinkedIn</Link></li>
            <li><Link href="#" className="text-sm text-zinc-400 hover:text-[#0168FD] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-sm text-zinc-400 hover:text-[#0168FD] transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="text-sm text-zinc-400 hover:text-[#0168FD] transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="text-sm text-zinc-400 hover:text-[#0168FD] transition-colors">Partnership</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          Copyright © {new Date().getFullYear()} Beyond Labs. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-zinc-500">
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}
