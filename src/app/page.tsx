"use client";

import Typography from "@/components/Typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="w-80">
        <Typography.Heading level={1} className="text-center mb-3">
          Form Example
        </Typography.Heading>
      </div>
    </main>
  );
}
