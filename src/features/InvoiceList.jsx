import { useSearchParams } from "react-router-dom";
import { useInvoices } from "../api/getInvoices";
import Empty from "../components/Empty";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
import InvoiceItem from "./InvoiceItem";

function InvoiceList() {
  const { isLoading, invoices, error } = useInvoices();
  const [searchParams] = useSearchParams();

  console.log(error);

  if (isLoading) return <Loader />;

  if (error) return <Error errorMessage={error.message} />;

  const filterValue = searchParams.get("status");

  const filteredInvoice = invoices?.data.filter((data) => {
    if (!filterValue) return true;
    return data.status === filterValue;
  });

  console.log(invoices);

  if (!filteredInvoice) return <Empty />;

  return (
    <div className="flex flex-col gap-5">
      {filteredInvoice?.map((inv) => (
        <InvoiceItem inv={inv} key={inv.id} />
      ))}
    </div>
  );
}

export default InvoiceList;
