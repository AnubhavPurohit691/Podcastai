"use client";
import { TextGenerateEffect } from "../components/ui/generateeffect";

const words = `Welcome to PromptCast.ai - Your AI-Powered Podcasting Assistant! 🎙️✨ Imagine listening to a podcast on any topic of your choice, anytime you want, simply by asking. 🤖 With PromptCast.ai, we transform your wishes into reality. 🔮 Our intelligent AI scrapes the web for the best information, processes it, and produces a personalized podcast - all within minutes! ⏱️
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
