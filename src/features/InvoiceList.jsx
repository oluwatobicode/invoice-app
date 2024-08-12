import { useInvoices } from "../api/getInvoices";
import Loader from "../ui/Loader";
import InvoiceItem from "./InvoiceItem";

function InvoiceList() {
  const { isLoading, invoices } = useInvoices();

  if (isLoading) return <Loader />;

  console.log(invoices);

  return (
    <div className="flex flex-col gap-5">
      {invoices.data?.map((inv) => (
        <InvoiceItem inv={inv} key={inv.id} />
      ))}
    </div>
  );
}

export default InvoiceList;
