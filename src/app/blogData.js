export const blogData = [
  {
    id: 1,
    img: "/redux.png",
    que: "Whats the difference between redux-thunk and redux-saga?",
    ans: "Both redux-thunk and redux-saga are middleware libraries for Redux, a popular state management library for JavaScript applications. They provide an alternative way to handle asynchronous actions, such as API calls, by encapsulating the side effects in a separate layer and allowing the reducers to remain pure functions.",
  },
  {
    id: 2,
    img: "/react.png",
    que: "In React, everything is a component. Explain it.",
    ans: "A component is a self-contained, reusable piece of code that can be composed using other components to create complex user interfaces. In React, a component can represent anything from a simple button to a complex form or a complete application. When building a React application, you start by defining the components that make up your user interface. Each component encapsulates its own logic and state, making it easier to manage and reason about your code.",
  },
  {
    id: 3,
    img: "/mobx.png",
    que: "Whats the difference between Redux and MobX state managers?",
    ans: "Redux is a predictable state container for JavaScript apps. Redux follows a unidirectional data flow pattern, which means that the data flows in only one direction in the application. Redux stores the entire application state in a single store, which is managed by reducers. Reducers are functions that take the current state and an action to return a new state. MobX is a simple and scalable state management library for JavaScript applications. MobX uses observables to track state changes, and it updates the UI automatically when the state changes. Observables are objects that can be watched for changes, and when they change, all the components that depend on them are updated automatically.",
  },
  {
    id: 4,
    img: "/react.png",
    que: "What is Virtual DOM in React JS and why is it necessary?",
    ans: "Virtual DOM plays a significant role in the scope of React development. It is important for a good candidate to be able to describe why it is useful to solve DOM manipulation problems with virtual DOM.",
  },
  {
    id: 5,
    img: "/graphql.png",
    que: "What are GraphQL and REST?",
    ans: "REST is a mature technology that has been widely used for building APIs for many years. Its based on the principles of HTTP and uses HTTP verbs like GET, POST, PUT, and DELETE to interact with resources. REST APIs usually return JSON or XML data. GraphQL, on the other hand, is a newer technology that was developed by Facebook. It allows clients to specify the data they need and returns only the requested data in a single response. This can be more efficient than REST, especially when dealing with complex data structures or when multiple requests would be needed with REST.",
  },

  {
    id: 6,
    img: "/react.png",
    que: "Whats the difference between React JS and React Native?",
    ans: "React JS is a library for building user interfaces for web applications. It allows developers to create reusable UI components that can be used across different pages and applications. React JS works on the basis of the Virtual DOM, which allows it to update the UI efficiently without having to reload the entire page. React Native, on the other hand, is a framework for building mobile applications. It allows developers to build cross-platform mobile applications using JavaScript and the React framework. React Native uses native components, which means that the applications built with it have a look and feel that is similar to that of native mobile applications.",
  },
];
