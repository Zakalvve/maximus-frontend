'use client'

import Link from "next/link";

export default function Home() {
  
  console.log("Page loaded");

  return (
    <div className="flex grow justify-center p-8">
      <div className="w-full max-w-7xl space-y-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          👋 Welcome to Maximus
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Your journey to mastering your financial future starts here. 🚀
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Ready to begin?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Get started by creating your first{" "}
          <span className="font-medium text-primary">projection</span> — a
          personalized financial forecast that helps you plan for retirement,
          major life events, or just peace of mind. 📈
        </p>

        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;The best time to plan was yesterday. The second-best time is now.&quot; 💬
        </blockquote>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          What you can do with Maximus:
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Create custom projections for different goals 🎯</li>
          <li>Analyze your future balances over time 📊</li>
          <li>Simulate different investment or withdrawal strategies 🔄</li>
          <li>Feel confident about your financial future 💼</li>
        </ul>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Ready to see your future unfold? Start by{" "}
          <Link href="/projection/wizard" className="text-primary underline underline-offset-4">
            creating a new projection
          </Link>{" "}
          today.
        </p>
      </div>
    </div>
  );
}
