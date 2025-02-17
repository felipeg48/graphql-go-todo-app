// import { createApp } from 'vue'
// import App from './App.vue'
//
// createApp(App).mount('#app')


import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient  from './apollo'
import App from './App.vue'

const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

//app.provide('apollo', apolloClient) // Provide the client directly
app.mount('#app')


// import { createApp } from 'vue'
// import App from './App.vue'
//
// const app = createApp(App)
// app.mount('#app')

