import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mt-16">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
