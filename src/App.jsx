import { useState } from "react";
import { useForm } from "react-hook-form";
import Item from "./Component/Item";
import Button from "react-bootstrap/Button";

function App() {
  const [items, setItems] = useState([]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      desc: "",
    },
  });

  const onSubmit = async (data) => {
    setItems([...items, data]);
  };
  return (
    <>
      <div className="bg-blue-700 mx-auto p-10 text-white flex ml-200 mb-120">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-3 p-10 flex flex-col border-white"
        >
          <label htmlFor="">Titre</label>
          <input
            type="text"
            name="title"
            className="border-2 border-white"
            {...register("title")}
          />

          <label htmlFor="">Description</label>
          <textarea
            name="desc"
            id="desc"
            className="border-2 border-white"
            {...register("desc")}
          ></textarea>
          <br />
          <Button type="submit" variant="outline-success">
            Add Item
          </Button>
        </form>
      </div>
      <div className="flex">
        <Item items={items} />
      </div>
    </>
  );
}

export default App;
