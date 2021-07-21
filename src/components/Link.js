const Link = ({ active, children, setFilter }) => {
  return (
    <div
      className={active ? 'link active' : 'link'}
      onClick={() => setFilter()}
    >{children}</div>
  );
}

export default Link;