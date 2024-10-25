import { TextGenerateEffectDemo } from './Generatetext'
import { TypewriterEffect } from './ui/typewriter-effect'

export default function Firstpage() {
  const words = [
    { text: "PDFs" },
    { text: "To" },
    { text: "Engaging" },
    { text: `Podcasts !`, className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="h-full py-10 md:py-20 gap-10 flex flex-col items-center justify-center">
      <section className="w-full px-4 md:px-10 lg:px-20">
        <TypewriterEffect words={words} />
      </section>
      <section className="w-full flex flex-col md:flex-row gap-10 px-4 md:px-10 lg:px-20">
        <TextGenerateEffectDemo />
      </section>
    </div>
  );
}
