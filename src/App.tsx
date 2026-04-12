import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import Contact from "./pages/Contact.tsx";
import Projects from "./pages/Projects.tsx";
import Careers from "./pages/Careers.tsx";
import NotFound from "./pages/NotFound.tsx";
import { PrivacyPolicy, TermsOfService, FAQ, SiteMapPage } from "./pages/LegalPages.tsx";
import ScrollToTopOnRoute from "@/components/ScrollToTopOnRoute.tsx";
import FloatingQuickActions from "@/components/FloatingQuickActions.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRoute />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sitemap" element={<SiteMapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingQuickActions />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
