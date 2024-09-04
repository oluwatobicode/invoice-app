import { useNavigate } from "react-router-dom";
import { useInvoiceDetails } from "../api/getInvoiceDetails";
import { formatCurrency } from "../utils/formatCurrency";
import Loader from "../ui/Loader";
import Status from "../ui/Status";
import Modal from "../ui/Modal";
import ConfirmDelete from "../ui/ConfirmDelete";
import { useDeleteInvoice } from "../api/useDeleteInvoice";
import { useUpdateInvoice } from "../api/useUpdateInvoice";

function InvoiceDetails() {
  const { isLoading, invoiceDetail } = useInvoiceDetails();
  const navigate = useNavigate();
  const { isDeleting, deleteInvoice } = useDeleteInvoice();
  const { isPaying, updatePayment } = useUpdateInvoice();

  if (isLoading) return <Loader />;

  const {
    id,
    createdAt,
    paymentDue,
    description,
    // paymentTerms,
    clientName,
    clientEmail,
    status,
    items,
    total,
    clientAddress,
    senderAddress,
  } = invoiceDetail.data;

  console.log(status);

  return (
    <Modal>
      <div className="flex flex-col gap-10 ml-5 mr-5 w-[800px]">
        <div className="flex flex-col  gap-5">
          <div className="">
            <button
              onClick={() => navigate(-1)}
              className="p-2 text-dark font-bold text-[15px]"
            >
              Go Back
            </button>
          </div>
          <div className="bg-white shadow-sm rounded-md p-5 flex">
            <div className="bg-white flex flex-row  justify-between w-full">
              <div className="flex items-center w-full">
                <div className="flex gap-5 items-center mr-auto">
                  <h1 className="font-medium text-[13px] text-lightDarker">
                    Status
                  </h1>
                  <Status type={status}>{status}</Status>
                </div>
                <div className="md:flex gap-5 hidden ">
                  <button className="bg-[#F9FAFE] font-bold text-[15px] text-lightDarker px-5 py-3 rounded-full">
                    Edit
                  </button>
                  <Modal.Open opens="delete">
                    <button className="bg-red font-bold text-[15px] text-white px-5 py-3 rounded-full">
                      Delete
                    </button>
                  </Modal.Open>
                  <button
                    onClick={() => updatePayment(id)}
                    disabled={isPaying}
                    className="bg-purpleDark font-bold text-[15px] text-white px-5 py-3 rounded-full disabled:bg-purpleLight disabled:cursor-not-allowed"
                  >
                    Mark as paid
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Modal.Window name="delete">
            <ConfirmDelete
              disabled={isDeleting}
              onConfirm={() => deleteInvoice(id)}
              id={id}
            />
          </Modal.Window>
          <div className="bg-white shadow-sm rounded-md p-5 flex flex-col gap-5">
            <div className="flex justify-between w-full">
              <div className="">
                <h1 className="font-bold text-[15px] mb-2">#{id}</h1>
                <p className="font-medium text-[13px] text-lightDarker">
                  {description}
                </p>
              </div>

              <div className="text-right leading-[18px] text-lightDarker font-medium text-[13px]">
                <span className="block mb-2">{senderAddress.street}</span>
                <span className="block mb-2">{senderAddress.city}</span>
                <span className="block mb-2">{senderAddress.postCode}</span>
                <span className="block mb-2">{senderAddress.country}</span>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col gap-5">
                <div className="">
                  <h1 className="mb-2 text-lightDarker font-medium text-[13px]">
                    Invoice Date
                  </h1>
                  <p className="font-bold text-[15px]">{createdAt}</p>
                </div>
                <div className="">
                  <h1 className="mb-2 text-lightDarker font-medium text-[13px]">
                    Payment Due
                  </h1>
                  <p className="font-bold text-[15px]">{paymentDue}</p>
                </div>
              </div>
              <div className="">
                <h1 className="mb-2 text-lightDarker font-medium text-[13px]">
                  Bill to
                </h1>
                <p className="font-bold text-[15px] mb-5">{clientName}</p>
                <div className="text-left  text-lightDarker font-medium text-[13px]">
                  <span className="block leading-[18px] mb-2">
                    {clientAddress.street}
                  </span>
                  <span className="block leading-[18px] mb-2">
                    {clientAddress.city}
                  </span>
                  <span className="block leading-[18px] mb-2">
                    {clientAddress.postCode}
                  </span>
                  <span className="block leading-[18px] mb-2">
                    {clientAddress.country}
                  </span>
                </div>
              </div>
              <div className="">
                <h1 className="mb-2 text-lightDarker font-medium text-[13px]">
                  Sent to
                </h1>
                <p className="font-bold text-[15px]">{clientEmail}</p>
              </div>
            </div>

            <div className="w-full  table">
              <table className="w-full ">
                <thead className="">
                  <tr>
                    <th className="text-left text-lightDarker font-medium text-[13px]">
                      Item Name
                    </th>
                    <th className="text-center text-lightDarker font-medium text-[13px]">
                      QTY.
                    </th>
                    <th className="text-center text-lightDarker font-medium text-[13px]">
                      Price
                    </th>
                    <th className="text-center text-lightDarker font-medium text-[13px]x">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items?.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td className="text-left font-bold text-[15px]">
                          {val?.name}
                        </td>
                        <td className="text-center text-lightDarker font-medium text-[13px]">
                          {val?.quantity}
                        </td>
                        <td className="text-center text-lightDarker font-medium text-[13px]">
                          {formatCurrency(val?.price)}
                        </td>
                        <td className="text-center font-bold text-[15px]">
                          {formatCurrency(val?.total)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot className="">
                  <tr>
                    <td>Total</td>
                    <td>{formatCurrency(total)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default InvoiceDetails;
