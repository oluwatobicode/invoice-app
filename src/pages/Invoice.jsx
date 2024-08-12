import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InvoiceList from "../features/InvoiceList";

function Invoice() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex flex-col mr-5 ml-5 mt-10 lg:mr-auto lg:ml-auto lg:mt-10 max-w-full">
        <Navbar />
        <InvoiceList />
      </div>
    </div>
  );
}

export default Invoice;
