/* eslint-disable react/prop-types */
function Status({ children, type }) {
  const base =
    "w-20  h-10 text-center flex items-center justify-center rounded-md font-bold";

  const styles = {
    paid: base + " bg-lightGreen text-lightGreen  bg-opacity-85 ",
    pending: base + " bg-inherit text-lightBrown ",
    draft: base + " bg-lightDarker",
  };
  return <div className={styles[type]}>{children}</div>;
}

export default Status;
