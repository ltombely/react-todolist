const Todo = ({ text, date, setDate, category, now, del, id }) => {
  const regEx = /^([0-9]{4})[-]([0-9]{2})[-]([0-9]{2})$/
  setDate(date.replace(regEx, '$3/$2/$1'))

  return (
    <>
      <div className="card text-bg-dark m-2 p-2">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="m-2 text-sm-start">Tarefa: {text}</p>
            <p className="m-2 text-sm-start">Data: {date}</p>
            <p className="m-2 text-sm-start">Categoria: {category}</p>
            <div className="d-flex flex-column">
            <button className="btn text-bg-success btn-sm m-2">COMPLETE</button>
            <button
              className="btn text-bg-danger btn-sm m-2"
              onClick={() => {
                del(id);
              }}
            >
              DELETE
            </button>
            <p className="m-2 mt-5 small">{now}</p>
          </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
