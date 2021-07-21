import TodoListContainer from "../containers/TodoListContainer";

const MainSection = (props) => {
  return (
    <section className="container">
      <TodoListContainer settodo={props.settodo} filter={props.match.params.filter || 'show_all'} />
    </section>
  );
}
export default MainSection;