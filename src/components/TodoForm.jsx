import { useState } from "react";

const TodoForm = ({
  text,
  setText,
  setDate,
  setCategory,
  setNow,
  addTodo,
  clearAll,
  categories,
  setCategories,
}) => {
  const [isDivVisible, setDivVisibility] = useState(false);
  const [newCategory, setNewCategory] = useState();

  const newDate = new Date();
  const year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDay();
  const date = newDate.getDate();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  switch (day) {
    case 0:
      day = "Domingo";
      break;
    case 1:
      day = "Segunda-feira";
      break;
    case 2:
      day = "Terça-feira";
      break;
    case 3:
      day = "Quarta-feira";
      break;
    case 4:
      day = "Quinta-feira";
      break;
    case 5:
      day = "Sexta-feira";
      break;
    case 6:
      day = "Sábado";
      break;
    default:
      day = "Dia Inválido";
  }

  switch (month) {
    case 1:
      month = "Janeiro";
      break;
    case 2:
      month = "Fevereiro";
      break;
    case 3:
      month = "Março";
      break;
    case 4:
      month = "Abril";
      break;
    case 5:
      month = "Maio";
      break;
    case 6:
      month = "Junho";
      break;
    case 7:
      month = "Julho";
      break;
    case 8:
      month = "Agosto";
      break;
    case 9:
      month = "Setembro";
      break;
    case 10:
      month = "Outubro";
      break;
    case 11:
      month = "Novembro";
      break;
    case 12:
      month = "Dezembro";
      break;
  }

  const time = `${hours}h${minutes}min  ${day}, ${date} de ${month} de ${year}`;
  setNow(time);

  return (
    <div className="m-2">
      <form
        className="form-control-sm text-bg-dark d-flex justify-content-between align-items-center "
        onSubmit={(e) => {
          e.preventDefault();
          if (!text) {
            return window.alert("Your todo text must not be empty");
          }

          addTodo();
        }}
      >
        <div className="d-flex flex-column align-items-sm-start">
          <div className="mt-1">
            <label htmlFor="text">Tarefa: </label>
            <input
              type="text"
              id="text"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="date">Data:</label>
            <input
              type="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="sel">Categoria:</label>
            <select
              name="sel"
              id="sel"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <button
              className="btn btn-sm btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                if (isDivVisible) {
                  setDivVisibility(false);
                } else {
                  setDivVisibility(true);
                }
              }}
            >
              New Category
            </button>
          </div>
          {isDivVisible && (
            <div className="d-flex flex-column justify-content-center mt-3" id="div">
              <div>
                <label htmlFor="categoryName">Category Name: </label>
                <input
                  type="text"
                  name="categoryName"
                  id="categoryName"
                  placeholder="Category"
                  onChange={(e) => {
                    setNewCategory(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  className="btn bg-success btn-sm m-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setCategories([...categories, newCategory]);
                    setDivVisibility(false);
                  }}
                >
                  ADD CATEGORY
                </button>
              </div>
            </div>
          )}
          <button className="btn btn-success m-2 btn-sm">ADD</button>
          <button className="btn btn-danger m-2 btn-sm" onClick={clearAll}>
            CLEAR ALL
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
