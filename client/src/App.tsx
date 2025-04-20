import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import Services from "./pages/Services";
import Register from "./pages/Register";
import WhyChooseUs from "./pages/WhyChooseUs";
import WhoCanJoin from "./pages/WhoCanJoin";
import Contact from "./pages/Contact";
import About from "./pages/About";
function Router() {
  return (
    <>
      {/* Define Routes using `Route` from wouter */}
      <Route path="/" component={HomePage} />
      <Route path="/services" component={Services} />
      <Route path="/register" component={Register} />
      <Route path="/WhyChooseUs" component={WhyChooseUs} />
      <Route path="/WhoCanJoin" component={WhoCanJoin} />
      <Route path="/Contact" component={Contact} />
      <Route path="/About" component={About} />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
