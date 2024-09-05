import { useState } from "react";

function InvoiceForm() {
  //1. Created a state that holds all the items in the invoice
  const [items, setItems] = useState([
    { id: 1, name: "", quantity: 1, price: 0, total: 0 },
  ]);

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id
          ? {
              ...item,
              [name]: value,
              total:
                name === "price" || name === "quantity"
                  ? item.price * item.quantity
                  : item.total,
            }
          : item
      )
    );
  };

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, name: "", quantity: 1, price: 0, total: 0 },
    ]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="p-5">
      <h1>New Invoice</h1>
      <form>
        <div className="">
          <h1>Bill From</h1>
          {/* hi */}
          <div className="flex">
            <label>Street</label>
            <input type="text" name="" id="" />
          </div>
          <div className="flex flex-row">
            <div className="">
              <label>city</label>
              <input type="text" name="" id="" />
            </div>
            <div className="">
              <label>postcode</label>
              <input type="text" name="" id="" />
            </div>
            <div className="">
              <label>country</label>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>

        {/* bill to */}
        <div className="">
          <h1>Bill to</h1>
          <div className="">
            <label htmlFor="">Client Name</label>
            <input type="text" name="" id="" />
          </div>
          <div className="flex">
            <label>Client Email</label>
            <input type="text" name="" id="" />
          </div>

          <div className="flex">
            <label>Street Address</label>
            <input type="text" name="" id="" />
          </div>
          <div className="flex flex-row">
            <div className="">
              <label>city</label>
              <input type="text" name="" id="" />
            </div>
            <div className="">
              <label>postcode</label>
              <input type="text" name="" id="" />
            </div>
            <div className="">
              <label>country</label>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>

        {/* item list */}
        <div className="">
          <div className="p-5">
            <h1>Item List</h1>
            <div className="item-list">
              {items.map((item) => (
                <div key={item.id} className="item-row flex items-center">
                  <input
                    type="text"
                    name="name"
                    value={item.name}
                    placeholder="Item Name"
                    onChange={(e) => handleChange(e, item.id)}
                    className="border p-2"
                  />
                  <input
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    placeholder="Qty."
                    onChange={(e) => handleChange(e, item.id)}
                    className="border p-2 mx-2"
                  />
                  <input
                    type="number"
                    name="price"
                    value={item.price}
                    placeholder="Price"
                    onChange={(e) => handleChange(e, item.id)}
                    className="border p-2 mx-2"
                  />
                  <input
                    type="number"
                    name="total"
                    value={item.quantity * item.price}
                    readOnly
                    className="border p-2 mx-2"
                  />
                  <button
                    type="button"
                    onClick={() => deleteItem(item.id)}
                    className="delete-button p-2 text-red-500"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addItem}
              className="add-item-button p-2 mt-4 bg-blue-500 text-white"
            >
              + Add New Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
