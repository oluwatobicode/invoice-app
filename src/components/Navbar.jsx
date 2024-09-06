import { useInvoices } from "../api/getInvoices";
import { useSearchParams } from "react-router-dom";
import Button from "../ui/Button";
import { useState } from "react";

function Navbar() {
  const { invoices } = useInvoices();
  const [showFilter, setShowFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = ["Draft", "Pending", "Paid"];

  const onClick = (e) => {
    let val = e.target.value;
    let isChecked = e.target.checked;

    if (isChecked) {
      setSearchParams({ status: val });
    } else {
      setSearchParams({});
    }

    setShowFilter(isChecked);
  };

  const filterValue = searchParams.get("status");

  const filteredInvoice = invoices?.data.filter((data) => {
    if (!filterValue) return true;
    return data.status === filterValue;
  });

  return (
    <div className="flex flex-row  items-center w-full lg:w-[800px] mb-10">
      <div className="mr-auto">
        <h1 className="font-bold text-[24px] text-dark">Invoices</h1>
        <p className="text-lightDarker flex gap-1 leading-5">
          <span className="hidden md:block">There are</span>
          {filteredInvoice?.length}
          <span className="hidden md:block">total</span> invoices
        </p>
      </div>

      <div className="mr-2 relative" onClick={() => setShowFilter(!showFilter)}>
        <button className="flex gap-2 items-center justify-center">
          <label htmlFor="filter" className="font-bold flex gap-1">
            Filter <span className="hidden md:block">by status</span>
          </label>
          <img className="w-5" src="/assets/icon-arrow-down.svg" alt="arrow" />
        </button>

        {showFilter && (
          <div className="absolute z-10 bg-white shadow-lg  p-6 rounded-md top-10">
            <ul>
              {categories.map((category) => (
                <li key={category}>
                  <label>
                    <input
                      // onChange={onFilterChange}
                      type="checkbox"
                      value={category}
                      className="mb-5 capitalize text-[14px]"
                      onChange={(e) => onClick(e)}
                      checked={filterValue === category}
                    />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Button
        type="primary"
        icon={
          <img
            className="w-4 h-4"
            src="/assets/icon-plus.svg"
            alt="plus sign"
          />
        }
      >
        New
        <span className="hidden md:block">Invoice</span>
      </Button>
    </div>
  );
}
export default Navbar;
