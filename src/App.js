import React, { Fragment } from "react";
import GradientsList from "./components/gradients-list";
import Header from './components/header';
function App() {
	return (
		<Fragment>
			<Header />
			<div className="App">
				<GradientsList />
			</div>
		</Fragment>
  );
}
export default App;
