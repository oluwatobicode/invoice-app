import Sidebar from "../components/Sidebar";
import InvoiceDetails from "../features/InvoiceDetails";

function InvoiceDetailsPage() {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <Sidebar />
      <div className="flex flex-col mr-5 ml-5 mt-10 lg:mr-auto lg:ml-auto lg:mt-10 max-w-full">
        <InvoiceDetails />
      </div>
    </div>
  );
}

export default InvoiceDetailsPage;
