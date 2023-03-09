import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { AnimeDetail } from "./pages/AnimeDetail";
import { MangasList } from "./pages/MangasList";

import { Home } from "./pages/Home";
import { AnimeList } from "./pages/AnimesList";
import { MangaDetail } from "./pages/MangaDetail";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/animes" element={<AnimeList />} />
        <Route path="/mangas" element={<MangasList />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
        <Route path="/manga/:id" element={<MangaDetail />} />
      </Route>
    </Routes>
  );
}
