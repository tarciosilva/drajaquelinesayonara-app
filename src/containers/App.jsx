import { GloabalStyle } from "../global/GlobalStyle";
import {
  Header,
  About,
  Company,
  Care,
  Conveniencies,
  Gallery,
  Rating,
  Map,
  Footer
} from "../components";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <GloabalStyle />
          <Header />
          <About />
          <Company />
          <Care />
          <Conveniencies />
          <Gallery />
          <Rating />
          <Map />
          <Footer />
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
