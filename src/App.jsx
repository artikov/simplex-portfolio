import "./App.css";

import {
	Navbar,
	Hero,
	Trusted,
	Features,
	Stats,
	Portfolio,
} from "./components";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Trusted />
			<Features />
			<Stats />
			<Portfolio />
		</>
	);
}

export default App;
