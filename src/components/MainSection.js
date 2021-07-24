import TodoListContainer from "../containers/TodoListContainer"

const MainSection = (props) => {
  return (
    <section className="container">
      <TodoListContainer
        filter={props.match.params.filter || "show_all"}
      />
    </section>
  )
}
export default MainSection
