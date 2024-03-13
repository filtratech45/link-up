'use client';

import React from 'react';

import Success from './Success';
import LinkUp from './LinkUp';

export default function Home() {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const toggleSuccess = () => setIsSuccess(!isSuccess);

  return isSuccess ? <Success onBack={toggleSuccess} /> : <LinkUp onSubmit={toggleSuccess} />;
}
