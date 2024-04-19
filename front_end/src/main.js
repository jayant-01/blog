import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createApp } from 'vue';
import App from './App.vue';
import "./assets/main.css";
import router from './router';

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router);

app.mount("#app");