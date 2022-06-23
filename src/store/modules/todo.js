export default {
    actions: {
        async fetchTodos(ctx) {
            // const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=" + limit)
            const res = await fetch("https://api.jsonbin.io/b/62b4887a402a5b3802358676/1")
            const todos = await res.json()
            ctx.commit('updateTodos', todos)
        }
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos
        },
        createTodo(state, newTodo) {
            state.todos.unshift(newTodo)
        }
    },
    state: {
        todos: []
    },
    getters: {
        allTodos(state) {
            return state.todos
        },
        todosCount(state) {
            return state.todos.length
        }
     },
}
