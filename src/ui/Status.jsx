/* eslint-disable react/prop-types */
function Status({ children, type }) {
  const base =
    "w-24  h-10 text-center flex items-center justify-center rounded-md font-bold capitalize";

  const styles = {
    Paid: base + " bg-lightGreen text-darkGreen",
    Pending: base + " bg-lightBrown text-darkBrown ",
    Draft: base + " bg-lightDarker text-lightDark ",
  };

  const circle = {
    Paid: "bg-darkGreen w-3 h-3 rounded-full",
    Pending: "bg-darkBrown w-3 h-3 rounded-full",
    Draft: "bg-lightDark w-3 h-3 rounded-full",
  };
  return (
    <div className={`${styles[type]} flex gap-1 items-center justify-center`}>
      <div className={circle[type]}></div>
      {children}
    </div>
  );
}

export default Status;
