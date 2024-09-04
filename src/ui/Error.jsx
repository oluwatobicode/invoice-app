/* eslint-disable react/prop-types */
function Error({ errorMessage }) {
  return (
    <div className="flex items-center justify-center m-5">
      <h1 className="font-bold text-[24px]">{errorMessage}</h1>
    </div>
  );
}

export default Error;
