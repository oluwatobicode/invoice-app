/* eslint-disable react/prop-types */
function ConfirmDelete({ disabled, onCloseModal, id, onConfirm }) {
  return (
    <div className="bg-white p-10 w-[480px] h-[250px] rounded-md">
      <h1 className="font-bold text-[25px] mb-2">Confirm Deletion</h1>
      <p className="mb-2 font-medium text-[15px] text-lightDarker">
        Are you sure you want to delete invoice {id}? This action cannot be
        undone.
      </p>

      <div className="flex gap-5 justify-end">
        <button
          className="bg-[#F9FAFE] font-bold text-[15px] text-lightDarker px-5 py-3 rounded-full"
          onClick={onCloseModal}
          disabled={disabled}
        >
          Cancel
        </button>
        <button
          className="bg-red font-bold text-[15px] text-white px-5 py-3 rounded-full"
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default ConfirmDelete;
