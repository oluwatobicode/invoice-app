function Empty() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 flex flex-col justify-center items-center gap-2">
        <img
          src="/assets/illustration-empty.svg"
          alt="empty illustration image"
        />
        <h1 className="font-bold text-[24px]">There is nothing here</h1>
        <p className="text-center font-medium text-[13px] text-draftDark">
          Create an invoice by clicking the
          <span className="block">
            {" "}
            <span className="font-bold">New Invoice</span> button and get
            started
          </span>
        </p>
      </div>
    </div>
  );
}

export default Empty;
