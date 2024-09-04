import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUpdateInvoice } from "../services/apiInvoice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdateInvoice() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: updatePayment, isLoading: isPaying } = useMutation({
    mutationFn: (id) =>
      fetchUpdateInvoice(id, {
        status: "paid",
      }),

    onSuccess: (data) => {
      toast.success(`Invoice ${data.id} successfully updated `);
      queryClient.invalidateQueries({ active: true });
      () => navigate("/invoice");
    },
    onError: () => toast.error("There was an error sending the invoice"),
  });
  return { isPaying, updatePayment };
}
