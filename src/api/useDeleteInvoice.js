import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteInvoiceApi } from "../services/apiInvoice";
import toast from "react-hot-toast";

export function useDeleteInvoice() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteInvoice } = useMutation({
    mutationFn: DeleteInvoiceApi,
    onSuccess: () => {
      toast.success("Invoice Successfully deleted!");
      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteInvoice };
}
