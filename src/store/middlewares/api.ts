import axios from "axios";
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from "redux";
import * as actions from "../api";
const api: Middleware = ({ dispatch }: MiddlewareAPI) => (
	next: Dispatch<AnyAction>
) => async (action: AnyAction) => {
	console.log("action is: ", action);
	if (action.type !== actions.apiCall.type) {
		//if action is not for api call,go to the next step
		console.log("tyep is: ", actions.apiCall.type);
		return next(action);
	}

	const {
		url,
		headers,
		method,
		data,
		onSuccess,
		onStart,
		onError,
	} = action.payload;

	//"onStart" represents loading and makes it true,
	//"onSuccess" action makes it false
	if (onStart) dispatch({ type: onStart });
	//next(action); //we can also delete this. It's for seeing the 'api' action details
	try {
		console.log("url is: ", url);
		const response = await axios({
			url,
			method,
			data,
			headers,
		});

		//General
		dispatch(actions.apiCallSuccess(response.data));
		//Spesific
		if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
	} catch (error) {
		console.log("axios response is: ", error);
		//General error action
		dispatch(actions.apiCallFailed(error.message));

		//Spesific error action
		if (onError) dispatch({ type: onError, payload: error.message });
	}
};

export default api;
