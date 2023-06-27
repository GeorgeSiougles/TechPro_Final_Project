import React from "react";
import ActionGroup from "../ActionGroup";

export default function Items(props) {
  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-light border shadow my-2">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((item, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{item.name}</td>
                <td>
                  <ActionGroup id={item.itemId} type="item" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
