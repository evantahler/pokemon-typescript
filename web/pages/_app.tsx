import "../scss/app.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";

export default function Layout(props) {
  const { Component, pageProps, err } = props;
  const combinedProps = Object.assign({}, pageProps || {}, {});

  return (
    <>
      <Container>
        <Header />
        <Component {...combinedProps} err={err} />
        <Footer />
      </Container>
    </>
  );
}
