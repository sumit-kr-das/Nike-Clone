import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import { ErrorPage, HomePage, ProductPage } from "./pages";
// Components
import Navigation from "./components/common/navigation/Navigation";
import Footer from "./components/common/footer/Footer";

const App = () => {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/product" element={<ProductPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
