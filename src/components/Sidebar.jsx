import InvoiceForm from "../features/InvoiceForm";

function Sidebar() {
  return (
    <div className="w-screen h-20 lg:h-screen lg:w-[26px] flex flex-row z-10 bg-[#0000004D] ">
      <div className="bg-blueLight flex flex-row justify-center items-center h-full lg:flex-col lg:h-full lg:rounded-e-2xl">
        <div className="bg-purpleLight flex items-center rounded-e-2xl justify-center h-full w-20 mr-auto lg:h-24 lg:w-full lg:mb-auto ">
          <img src="/assets/logo.svg" alt="" />
        </div>

        <div className="w-20 flex items-center justify-center mr-2 cursor-pointer lg:mb-4 lg:mr-0">
          <img src="/assets/icon-moon.svg" alt="" />
        </div>

        <div className="w-20 h-full flex items-center justify-center border-l-[0.9px]  border-lightDarker lg:border-l-0 lg:border-t-[0.9px] lg:mb-2 lg:w-full  lg:h-16">
          <img
            className="rounded-full w-10 h-10 mt-2"
            src="/assets/image-avatar.jpg"
            alt="user-profile-picture"
          />
        </div>
      </div>

      <div className="absolute hidden left-14 p-10 -z-10 w-[650px] rounded-tr-2xl rounded-br-2xl bg-white h-screen  ">
        <InvoiceForm />
      </div>
    </div>
  );
}

export default Sidebar;
