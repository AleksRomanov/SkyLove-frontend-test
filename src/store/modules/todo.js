export default {
    actions: {
        async fetchTodos(ctx) {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
            const todos = await res.json()
            ctx.commit('updateTodos', todos)
        }
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos
        }
    },
    state: {
        todos: []
    },
    getters: {
        allTodos(state) {
            return state.todos
        }
    },
}
