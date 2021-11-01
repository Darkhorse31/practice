import React, { useState } from "react";

const Form = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleId = (event) => {
    setId(event.target.value);
  };
  const handleForm = (event) => {
    alert(`${id}`);
    event.preventDefault();
  };
  const handleTittle = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">Id</label>
        <input type="text" value={id} onChange={handleId} />
        <label>Tittle</label>
        <input type="text" value={title} onChange={handleTittle} />
        <label htmlFor="">Date</label>
        <input type="textarea" name="" value={date} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Form;
