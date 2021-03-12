# React Redux Starterkit with ready to use API middleware

React-Redux starter-kit is the result of personal effort and it uses [redux-toolkit](https://redux-toolkit.js.org/) and contains API middleware that is managed by axios. Since redux-toolkit automagically brings developer and option thunk middleware as default you don't need to carry about that. Also this kit encourages you to using [Redux Ducks](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/) pattern

### How to install?

Download this repository and run:

```bash
npm i
```

### How middleware works?

Everytime when we dispatch an action we trigger the first middleware in middleware chain.The pattern with middleware looks like:

1. An event occurs
2. An action is dispatched
3. Middleware receives the action
4. Reducer creates a new state from the change prescribed by the action
5. New state is passed into the React app via props


### How to create new API call action?

Ducks approach says that you should always keep your related actions,reducer and other functionalites in one places instead of seperating them. If you want to make an API call which is related to your "test" feature what you need to do is going redux test folder and adding a function like that:

```javascript
export const testApiCall = (id: number) =>
	apiCall({
		url: `https://jsonplaceholder.typicode.com/users/${id}`,
		onStart: requested.type,
		onSuccess: success.type,
		onError: failed.type,
	});
```
testApiCall is a wrapper action for our generic apiCall action. Then we can give the sub-actions to that generic apiCall action. You can see the related file setup [here](https://github.com/orhanors/React-Redux-Typescript-Starterkit/blob/master/src/store/test.ts)

### How to connect with component?

```javascript
import useCustomSelector from "./store/helpers/useCustomSelector";
```
useCustomSelector is the processed version of useSelector with TypeScript. If you want to implement this template to your JS project you can use useSelector which comes from react-redux

You can destructure the property that you want using selector:

```javascript
const { test } = useCustomSelector((store) => store);
```

To dispatch and action you don't need to do extra work. You can use useDispatch from react redux:

```javascript
const dispatch = useDispatch();
```

And there we go. If we want to call our test API we just need to dispatch this action. Let's call it with user id 1:

```javascript
dispatch(testApiCall(1));
```

There we go. If you go to developer tools you will see and output which looks like:


```javascript
test/requested
test/success
```
or

```javascript
test/requested
test/failed
```

For each contidion you'll be able to get your "loading", "error" and "success" state and you can use them in your component


