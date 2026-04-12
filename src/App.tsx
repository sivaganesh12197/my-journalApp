import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PublishPage from "./pages/PublishPage";
import GuidePage from "./pages/GuidePage";
import SubmitPage from "./pages/SubmitPage";
import ArticleListPage from "./pages/ArticleListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/article-list" element={<ArticleListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;