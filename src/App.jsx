import { Fragment } from "react";
import Main from "./sections/main/main.section";
import TitleSection from "./sections/title/title.section";
import Footer from "./sections/footer/footer.section";

const App = () => {
  return (
    <Fragment>
      <TitleSection />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default App;
