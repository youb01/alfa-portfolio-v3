import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CustomCursor } from "./components/ui/cursor/CustomCursor";
import { GrainOverlay } from "./components/ui/GrainOverlay";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ComingSoonPage } from "./pages/ComingSoonPage";

const COMING_SOON = import.meta.env.VITE_COMING_SOON === "true";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: EASE }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  if (COMING_SOON) {
    return <ComingSoonPage />;
  }

  return (
    <BrowserRouter basename="/">
      <GrainOverlay />
      <CustomCursor />
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
