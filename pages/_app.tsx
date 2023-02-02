import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import nProgress from 'nprogress'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [showChild, setShowChild] = useState(false);
  nProgress.configure({showSpinner: false})

  useEffect(() => {
    setShowChild(true); // avoid react Hydration failed error screen
    // NProgress bar settings
    router.events.on('routeChangeStart', () =>    nProgress.start())
    router.events.on('routeChangeComplete', () => nProgress.done())
    router.events.on('routeChangeError', () =>    nProgress.done())
  }, [router.events]);

  if (!showChild) {
    return null;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className={poppins.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  )
}
