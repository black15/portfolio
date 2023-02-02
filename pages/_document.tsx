import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-50`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
