import Layout from '@/components/Layout'
import LoginModal from '@/components/modals/LoginModal'
// import Modal from '@/components/Modal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Modal isOpen title="test modal" actionLabel='Submit'/> */}
  <LoginModal/>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )
}
