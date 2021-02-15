import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import useCustomSelector from "./store/helpers/useCustomSelector";
import { apiCall } from "./store/api";
import { requested, success, failed, testCallApi } from "./store/test";
import { test2CallApi } from "./store/test2";

function App() {
	const dispatch = useDispatch();
	const { test } = useCustomSelector((store) => store);

	const handleRedux = (e: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(testCallApi(1));
	};

	const handleRedux2 = (e: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(test2CallApi());
	};
	return (
		<div className='App'>
			<button onClick={handleRedux}>REDUX</button>
			{/* <div> {JSON.stringify(test)} </div> */}

			<button onClick={handleRedux2}>REDUX2</button>
			{/* <div> {JSON.stringify(test)} </div> */}
		</div>
	);
}

export default App;
