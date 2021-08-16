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
                state.todos.push(todo)
            },
            deleteTodo(state, todo) {
                let todoIndex = state.todos.findIndex(t => t._id == todo._id)
                if (todoIndex > -1) {
                    state.todos.splice(todoIndex, 1)
                }
            },
            updateTodo(state, todo) {
                let todoIndex = state.todos.findIndex(t => t._id == todo._id)
                if (todoIndex > -1) {
                    state.todos.splice(todoIndex, 1, todo)
                }

            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                vuexContext.commit("setTodos", [])
            },
            addTodo(vuexContext, todo) {
                let newTodo = {
                    _id: Math.random() * 10e17,
                    text: todo
                }
                console.log(newTodo)
                vuexContext.commit("addTodo", newTodo)
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