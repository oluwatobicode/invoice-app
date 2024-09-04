import { useQuery } from "@tanstack/react-query";
import { fetchInvoiceDetails } from "../services/apiInvoice";
import { useParams } from "react-router-dom";

export function useInvoiceDetails() {
  const { id } = useParams();
  const {
    isLoading,
    data: invoiceDetail,
    error,
  } = useQuery({
    queryKey: ["invoices", id],
    queryFn: () => fetchInvoiceDetails(id),
    retry: false,
  });

  return { isLoading, invoiceDetail, error };
}
