import { useQuery } from "@tanstack/react-query";
import { fetchInvoices } from "../services/apiInvoice";

export function useInvoices() {
  const { isLoading, data: invoices } = useQuery({
    queryKey: ["invoices"],
    queryFn: fetchInvoices,
  });

  return { isLoading, invoices };
}
