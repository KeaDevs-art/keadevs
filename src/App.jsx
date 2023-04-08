import { Fragment } from "react";
import Main from "./sections/main/main.section";
import TitleSection from "./sections/title/title.section";

const App = () => {
  return (
    <Fragment>
      <TitleSection />
      <Main />
    </Fragment>
  );
};

export default App;
