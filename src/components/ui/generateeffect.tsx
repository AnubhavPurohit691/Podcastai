"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration, delay: stagger(0.2) }
    );
  }, [scope.current, animate, duration, filter]);

  const renderWords = () => (
    <motion.div ref={scope} className="flex flex-wrap">
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="dark:text-white text-black opacity-0 mr-2 mb-2"
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold max-w-3xl mx-auto px-4", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
