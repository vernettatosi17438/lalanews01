import Header from '@/components/header';
import '../styles/globals.css';
export default function App({ Component, pageProps = {} }) {

  return (
    <>
      <Header />
      <main className="container">
        <div className="grid grid-cols-12 gap-4 mt-10 pb-10">
          <div className="col-span-12">
          <Component {...pageProps} />
          </div>
        </div>
      </main>
    </>
  );
}