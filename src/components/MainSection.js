import TodoListContainer from "../containers/TodoListContainer";

const MainSection = ({ settodo }) => {
  return (
    <section className="container">
      <TodoListContainer settodo={settodo} />
    </section>
  );
}
export default MainSection;