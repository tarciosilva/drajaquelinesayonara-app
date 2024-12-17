import { GloabalStyle } from "../global/GlobalStyle";
import { Header, About, Company } from "../components";
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
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
