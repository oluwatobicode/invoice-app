import supabase from "./supabase";

export async function fetchInvoices() {
  let { data, error } = await supabase.from("invoices").select("*");

  if (error) {
    console.log(error);
    throw new Error("Invoices could not be found!");
  }

  return { data, error };
}
