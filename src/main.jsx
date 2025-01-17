import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./borderAnimation.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import { Tooltip } from 'react-tooltip'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
        <Tooltip id="my-tooltip" />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
