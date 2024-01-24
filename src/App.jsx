import "./App.css";

import {
	Navbar,
	Hero,
	Trusted,
	Features,
	Stats,
	Portfolio,
	Blog,
	Testimonials,
	FAQs,
	Contact,
	Footer,
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
			<Blog />
			<Testimonials />
			<FAQs />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
