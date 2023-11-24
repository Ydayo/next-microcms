"use client";
import { MouseEvent, useRef } from "react";

export const useScroll = () => {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const handleScroll = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return {
    scrollRef,
    handleScroll,
  };
};
