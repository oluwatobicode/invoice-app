import { useInvoices } from "../api/getInvoices";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
import InvoiceItem from "./InvoiceItem";

function InvoiceList() {
  const { isLoading, invoices, error } = useInvoices();

  console.log(error);

  if (isLoading) return <Loader />;

  if (error) return <Error errorMessage={error.message} />;

  console.log(invoices);

  return (
    <div className="flex flex-col gap-5">
      {invoices?.data?.map((inv) => (
        <InvoiceItem inv={inv} key={inv.id} />
      ))}
    </div>
  );
}

export default InvoiceList;
