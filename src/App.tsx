import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SoundSystemProvider } from "./components/wam/SoundSystem";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

import WamCursor from "./components/wam/WamCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SoundSystemProvider>
      <TooltipProvider>
        <WamCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SoundSystemProvider>
  </QueryClientProvider>
);

export default App;

