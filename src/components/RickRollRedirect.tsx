"use client";

import { useEffect } from 'react';

interface RickRollRedirectProps {
  platform: string;
}

export default function RickRollRedirect({ platform }: RickRollRedirectProps) {
  useEffect(() => {
    // 直接跳转到Rick Roll视频，无延迟
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }, []);

  return null; // 不显示任何内容，直接跳转
}