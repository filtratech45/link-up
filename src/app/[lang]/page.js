'use client';

import React from 'react';
// import { useRouter } from 'next/navigation';

import Success from './Success';
import LinkUp from './LinkUp';

export default function Home(props) {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const toggleSuccess = () => setIsSuccess(!isSuccess);

  return isSuccess ? <Success onBack={toggleSuccess} {...props} /> : <LinkUp onSubmit={toggleSuccess} {...props} />;
}
