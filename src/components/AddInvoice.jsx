import Modal from "../ui/Modal";

function AddInvoice() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="add-invoice">
          <h1>Add Invoice</h1>
        </Modal.Open>
        <Modal.Window name="add-invoice">
          <h1>Test</h1>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddInvoice;
