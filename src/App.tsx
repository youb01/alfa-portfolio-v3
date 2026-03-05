import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomCursor } from "./components/ui/cursor/CustomCursor";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ComingSoonPage } from "./pages/ComingSoonPage";

const COMING_SOON = import.meta.env.VITE_COMING_SOON !== "false";

function App() {
  if (COMING_SOON) {
    return <ComingSoonPage />;
  }

  return (
    <BrowserRouter basename="/">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
