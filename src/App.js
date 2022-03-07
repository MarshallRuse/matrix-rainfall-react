import MatrixBG from "./MatrixBG";

function App() {
	return (
		<div style={{ position: "relative", width: "100vw", height: "100vh" }}>
			<MatrixBG />
			<h1
				style={{ color: "#fff", fontSize: "4rem", position: "relative", padding: "2em", pointerEvents: "none" }}
			>
				Converting a Vanilla JS Canvas Animation to React
			</h1>
		</div>
	);
}

export default App;
