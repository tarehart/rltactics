import { createApp, h, provide } from 'vue'
import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { AUTH_TYPE, createAuthLink, type AuthOptions } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client/core'

import './assets/main.css'
import { DefaultApolloClient } from '@vue/apollo-composable';
import { createApolloProvider } from '@vue/apollo-option';

Amplify.configure(awsExports);

// https://github.com/awslabs/aws-mobile-appsync-sdk-js#using-authorization-and-subscription-links-with-apollo-client-v3-no-offline-support
const url = awsExports.aws_appsync_graphqlEndpoint;
const region = awsExports.aws_appsync_region;

const auth = {
    type: AUTH_TYPE.API_KEY,
    apiKey: awsExports.aws_appsync_apiKey,
} as AuthOptions;

// https://apollo.vuejs.org/guide/installation.html#manual-installation
// https://v4.apollo.vuejs.org/migration/#packages
const httpLink = createHttpLink({ uri: url });

const link = ApolloLink.from([
    createAuthLink({ url, region, auth }),
    createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

const app = createApp({
    setup() {
        provide(DefaultApolloClient, client);
    },
    render: () => h(App),
})

const apolloProvider = createApolloProvider({
    defaultClient: client,
  })

app.use(router)
app.use(apolloProvider)

app.mount('#app')
