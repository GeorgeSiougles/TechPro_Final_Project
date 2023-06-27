import React from "react";
import { Link } from "react-router-dom";
import ItemService from "../service/ItemService";

export default function ActionGroup(props) {
  const deleteHandler = async (id) => {
    console.log(id);
    await ItemService.deleteItem(id);
    window.location.reload();
  };

  return (
    <>
      <Link className="btn btn-primary mx-2" to={`/viewItem/${props.id}`}>
        View
      </Link>
      <Link className="btn btn-info mx-2" to={`/editItem/${props.id}`}>
        Edit
      </Link>
      <button
        className="btn btn-danger mx-2"
        onClick={() => deleteHandler(props.id)}
      >
        Delete
      </button>
    </>
  );
}
