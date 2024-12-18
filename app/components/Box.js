import Header from "./Header";
import Footer from "./Footer";

export default function Box({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
