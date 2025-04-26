'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Investing() {
  const router = useRouter();

  useEffect(() => {
    router.push('/get-started');
  }, [router]);

  return null;
}
