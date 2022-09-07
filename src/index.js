import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class Layout extends Component {
	render() {
		return <p>Hello Portfolio!</p>;
	}
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
