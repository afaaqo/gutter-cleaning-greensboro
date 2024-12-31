import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GutterRepair from './pages/GutterRepair';
import GutterInstallation from './pages/GutterInstallation';
import GutterGuards from './pages/GutterGuards';
import DownspoutServices from './pages/DownspoutServices';
import GutterMaintenance from './pages/GutterMaintenance';
import GutterPainting from './pages/GutterPainting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gutter-repair" element={<GutterRepair />} />
      <Route path="/gutter-installation" element={<GutterInstallation />} />
      <Route path="/gutter-guards" element={<GutterGuards />} />
      <Route path="/gutter-downspout-services" element={<DownspoutServices />} />
      <Route path="/gutter-maintenance" element={<GutterMaintenance />} />
      <Route path="/gutter-painting" element={<GutterPainting />} />
    </Routes>
  );
}

export default App;