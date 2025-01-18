import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VideosProvider } from './context/VideosContext';


const AppRoutes = () => {
  return <>
    <BrowserRouter>
      <VideosProvider>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<Home />} />
            <Route path="new-video" element={<NewVideo />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </VideosProvider>
    </BrowserRouter>
  </>;
}

export default AppRoutes;
