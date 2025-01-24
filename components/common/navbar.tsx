import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Supabase
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

// UI
import { Menu } from '@headlessui/react';

// Components
import LoginButton from '@/components/auth/LoginLogOutButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

export default function Navbar() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/ourteam', label: 'Our Team' },
    { href: '/events', label: 'Events' },
    { href: '/jobs', label: 'Jobs' },
    { href: '/housing', label: 'Housing' },
    { href: '/alumni', label: 'Alumni' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/faq', label: 'FAQ' },
  ];

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut();
    router.push('/'); // Redirect to home page after logout
  };

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 bg-customKhaki">
      <div className="container md:mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo (Hidden on small screens) */}
        <Link href="/" className="flex items-center text-xl font-bold hidden md:flex">
          <Image src="/images/logo.png" alt="BDGSA" width={100} height={75} />
        </Link>

        {/* Title (Visible on small screens) */}
        <div className="text-xl font-bold md:hidden text-customGreen">BDGSA</div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center md:gap-4 gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="hover:text-gray-600 dark:hover:text-gray-300"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <LoginButton />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg md:hidden">
            {/* Smaller Logo and Title */}
            <div className="flex items-center justify-start p-2">
              <Image src="/images/logo.png" alt="BDGSA" width={50} height={50} />
              <div className="text-xl text-customGreen font-bold">BDGSA</div>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-col gap-2 p-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="block py-2 hover:text-gray-600 dark:hover:text-gray-300"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
              <LoginButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}