import supabase from "./supabase";

export async function fetchInvoices() {
  let { data, error } = await supabase.from("invoices").select("*");

  if (error) {
    console.log(error);
    throw new Error("Invoices could not be found!");
  }

  return { data, error };
}

export async function fetchInvoiceDetails(id) {
  let { data, error } = await supabase
    .from("invoices")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.log(error);
    throw new Error("Invoice Detail could not be found!");
  }

  return { data };
}

export async function DeleteInvoiceApi(id) {
  const { data, error } = await supabase.from("invoices").delete().eq("id", id);

  if (error) {
    throw new Error("Error in deleting cabin!");
  }

  return { data };
}

export async function EditInvoiceApi() {}

export async function fetchUpdateInvoice(id, obj) {
  const { data, error } = await supabase
    .from("invoices")
    .update(obj)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error("error in updating the cabins");

  return { data };
}

export async function filterInvoice() {}
