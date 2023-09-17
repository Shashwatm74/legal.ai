import '@/styles/globals.scss'
import Head from 'next/head'


export const metadata = {
  title: 'Legal.ai',
  description: 'AI based legal assistant',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title> Legal.ai </title>
        <meta name="description" content="AI based legal assistant" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  )
}
