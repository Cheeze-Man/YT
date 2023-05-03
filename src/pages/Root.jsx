import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "../context/YoutubeApiContext";

const queryClient = new QueryClient();
export default function Root() {
  return (
    <>
      <NavBar />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}
