import React, { useEffect } from 'react'
import Todo from './Todo'
import { TodoListProps } from '../containers/VisibleTodoList'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Loader from './Loader'

const TodoList: React.FC<TodoListProps> = (props) => {
  useEffect(() => {
    props.loadTodoList()
  }, [])

  const todoListContainer = (
    <TransitionGroup component="ul" className="list-group">
      {props.todos.map(todo => 
        (<CSSTransition
          key={todo._id}
          classNames='todo'
          timeout={800} 
        >
          <Todo
            {...todo} 
            onDeleteClick={props.deleteTodo}
            onToggleTodo={props.toggleTodo}
          />
        </CSSTransition>)
      )}
    </TransitionGroup>
  )
  
  return (
    <React.Fragment>
      {props.isLoading 
        ? (<div className="loader">
            <Loader/>
          </div>)
        : todoListContainer  
      }
    </React.Fragment>
  )
}

export default TodoList