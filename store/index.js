import Vuex from "vuex"

const createStore = () => {
    return new Vuex.Store({
        state: {
            todos: []
        },
        mutations: {
            setTodos(state, todos) {
                state.todos = todos
            },
            addTodo(state, todo) {
                state.push(todo)
            },
            deleteTodo(state, todo) {
                let todoIndex = state.todos.findIndex(t => { t.id = todo.id })
                state.todos.splice(todoIndex, 1)
            },
            updateTodo(state, todo) {
                let todoIndex = state.todos.findIndex(t => { t.id = todo.id })
                state.todos.splice(todoIndex, 1, todo)
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                vuexContext.commit("setTodos", [])
            },
            addTodo(vuexContext, todo) {
                vuexContext.commit("addTodo", todo)
            },
            deleteTodo(vuexContext, todo) {
                vuexContext.commit("deleteTodo", todo)
            },
            updateTodo(vuexContext, todo) {
                vuexContext.commit("updateTodo", todo)
            }
        },
        getters: {
            getTodos(state) {
                return state.todos
            }
        }
    })
}

export default createStore;