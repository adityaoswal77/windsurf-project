'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    router.push('/auth/login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push('/');
  };

  // Don't show navbar on login page
  if (pathname === '/auth/login') return null;

  return (
    <nav className="bg-white border-b border-[var(--border-default)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link 
              href="/"
              className="flex items-center px-2 text-gray-900 hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="font-semibold text-xl">SPV Agent</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-4"
              >
                <Link href="/spv/new">
                  <Button variant="secondary">New SPV</Button>
                </Link>
                <Button variant="outline" onClick={handleLogout}>
                  Log out
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Button onClick={handleLogin}>
                  Log in
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
