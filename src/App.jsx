import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Invoice from "./pages/Invoice";
import InvoiceDetails from "./pages/InvoiceDetails";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="invoice/:id" element={<InvoiceDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster toastOptions={{ duration: 4000 }} />
      </QueryClientProvider>
    </>
  );
}

export default App;
