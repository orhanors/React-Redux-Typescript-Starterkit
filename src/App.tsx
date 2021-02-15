import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import useCustomSelector from "./store/helpers/useCustomSelector";
import { apiCall } from "./store/api";
import { requested, success, failed, testApiCall } from "./store/test";

function App() {
	const dispatch = useDispatch();
	const { test } = useCustomSelector((store) => store);
	const handleRedux = (e: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(testApiCall());
	};
	return (
		<div className='App'>
			<button onClick={handleRedux}>REDUX</button>
			<div> {JSON.stringify(test)} </div>
		</div>
	);
}

export default App;
