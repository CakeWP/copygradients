import React, { Fragment } from "react";
import GradientsList from "./components/gradients-list";
import Header from "./components/header";
import Footer from "./components/footer";
function App() {
  return (
    <Fragment>
      <Header />
      <div className="App">
        <GradientsList />
      </div>
      <Footer />
    </Fragment>
  );
}
export default App;
