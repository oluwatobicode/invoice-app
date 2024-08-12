/* eslint-disable react/prop-types */
function Button({ children, onClick, type, icon }) {
  const base =
    "flex items-center justify-center gap-2 cursor-pointer text-white font-bold";
  const style = {
    primary:
      base +
      " bg-purpleDark rounded-full px-6 py-3 lg:px-6 lg:py-2 lg:text-[18px]",
    delete: "",
  };
  return (
    <button onClick={onClick} className={style[type]}>
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
        {icon}
      </div>
      {children}
    </button>
  );
}

export default Button;
