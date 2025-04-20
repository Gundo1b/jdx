import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import Services from "./components/sections/Services";
import Register from "./components/sections/Register";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import WhoCanJoin from "./components/sections/WhoCanJoin";
import Contact from "./components/sections/Contact";
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
