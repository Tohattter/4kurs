import { connect, ConnectedProps } from "react-redux";
import TodoList from "../components/TodoList";
import { RootState } from "../redux/reducers";
import { fetchDeleteTodo } from "../redux/actions/deleteTodo";
import { fetchToggleTodo } from "../redux/actions/toggleTodo";
import fetchTodoList from "../redux/actions/fetchTodoList";

export type TodoListProps = ConnectedProps<typeof connector>

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
  isLoading: state.loader.isLoading
})

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id: string) => {
    return dispatch(fetchDeleteTodo(id))
  },
  
  toggleTodo: (id: string) => {
    return dispatch(fetchToggleTodo(id))
  },

  loadTodoList: () => {
    return dispatch(fetchTodoList())
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(TodoList)