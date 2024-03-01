export const FooterElem = ({ setTodosArray, todosArray}) => {
  const clearAll = () => {
    setTodosArray([]);
    localStorage.setItem('localTodos', JSON.stringify([]));
  };

  const footerText =
    todosArray.length === 0
      ? 'Дорогуша, у вас нет задач :('
      : `У вас ${todosArray.length} задач`;

  return (
    <footer className="footer-part">
      <p>{footerText}</p>
      <button onClick={clearAll}>Clear all</button>
    </footer>
  );
};
