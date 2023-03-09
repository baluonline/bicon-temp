import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

 const base_url = process.env.PUBLIC_URL
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Technology from "./pages/Technology";
import Consulting from "./pages/Consulting";

// layouts
import Header from "./layouts/Header";
import HelpLayout from "./layouts/HelpLayout";

import "./App.css";
import { StrictMode } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<Header />}>
      <Route index exact path={base_url}  element={<Home />} />
      <Route path="/portal/technology" element={<Technology />} />
      <Route path="/portal/consulting" element={<Consulting />} />
      <Route path="/portal/contact" element={<Contact />} />
      <Route path="/portal/about" element={<About />} />
      <Route path="/portal/help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
