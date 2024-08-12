import { useNavigate, useSearchParams } from "react-router-dom";
import Status from "../ui/Status";
import { formatCurrency } from "../utils/formatCurrency";
import { useState } from "react";
// import { formatDate } from "../utils/formatDate";

/* eslint-disable react/prop-types */
function InvoiceItem({ inv }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { id, clientName, total, paymentDue, status } = inv;

  return (
    <div className="shadow-md bg-white rounded-md h-full md:h-[85px] p-2 text-left  flex flex-col">
      <div className="flex flex-row gap-5 h-full justify-between  md:items-center md:justify-center md:flex-row">
        <div className="flex flex-col md:flex-row md:flex-[10%] md:w-fit gap-5">
          <p className="text-black font-bold">
            <span className="text-lightDarker">#</span>
            {id}
          </p>
          <p className="text-lightDarker font-normal">
            {/* due{formatDate(Date.parse(paymentDue))} */}
            Due 31 Oct 2021
          </p>
          <h1 className="text-dark font-extrabold">{formatCurrency(total)}</h1>
        </div>

        <div className="flex flex-col flex-wrap justify-between md:w-fit md:gap-10 md:flex-row md:flex-nowrap md:items-center md:flex-50%">
          <p className="text-lightDarker font-normal">{clientName}</p>
          <Status type={status}>{status}</Status>
          <button
            className="hidden md:block mr-2"
            onClick={() => navigate(`/invoice/${id}`)}
          >
            <img
              src="/assets/icon-arrow-right.svg"
              className="w-3 h-3 cursor-pointer"
              alt="right-arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvoiceItem;
