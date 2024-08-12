import Button from "../ui/Button";

function Navbar() {
  return (
    <div className="flex flex-row  items-center w-full lg:w-[800px] mb-10">
      <div className="mr-auto">
        <h1 className="font-bold text-[24px] text-dark">Invoices</h1>
        <p className="text-lightDarker flex gap-1 leading-5">
          <span className="hidden md:block">There are</span>7{" "}
          <span className="hidden md:block">total</span> invoices
        </p>
      </div>

      <div className="mr-2 ">
        <button className="flex gap-2 items-center justify-center">
          <p className="font-bold flex gap-1">
            Filter <span className="hidden md:block">by status</span>
          </p>
          <img className="w-5" src="/assets/icon-arrow-down.svg" alt="arrow" />
        </button>
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
