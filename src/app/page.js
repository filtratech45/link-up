'use client';

import React from 'react';

import Success from './Success';
import LinkUp from './LinkUp';

export default function Home() {
  const [isSuccess, setIsSuccess] = React.useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      {isSuccess ? <Success onBack={() => setIsSuccess(false)} /> : <LinkUp onSubmit={() => setIsSuccess(true)} />}
    </main>
  );
}
