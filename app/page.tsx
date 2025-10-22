'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Redirect on client side after mount
    window.location.href = '/biome';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-white text-center">
        <div className="animate-pulse mb-4">
          <div className="w-16 h-16 border-4 border-[#b5d4ba] border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        <p className="text-lg">Loading BIOME...</p>
      </div>
    </div>
  );
}
