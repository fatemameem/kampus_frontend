import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Navbar from '@/components/common/navbar';
import Head from 'next/head';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (router.isFallback === false && !router.isReady) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }

    // Reset isNotFound when route changes
    const handleRouteChange = () => setIsNotFound(false);
    const handle404 = () => setIsNotFound(true);

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handle404);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handle404);
    };
  }, [router]);
  return (
    <div>
      <Head>
        <title>Bangladeshi Graduate Students&apos; Association (BDGSA)</title>
        <meta name="description" content="Official website of the BDGSA community" />
      </Head>
      {!isNotFound && <Navbar />}
      <main>{children}</main>
    </div>
  );
}
