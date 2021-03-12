### React Redux Starterkit with ready to use API middleware

React-Redux starter-kit which uses [redux-toolkit](https://redux-toolkit.js.org/) and contains API middleware that is managed by axios. Since redux-toolkit automagically brings developer and option thunk middleware as default you don't need to carry about that. Also this kit encourages you to using [Redux Ducks](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/) pattern

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


### How to create new API



