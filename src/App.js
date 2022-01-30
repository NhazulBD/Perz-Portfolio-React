import React, { Suspense } from "react";

// import Layout from "./layouts/Layout";
import Preloader from "./components/preloader/Preloader";
import Home from "./pages/home/Home";

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Home />
    </Suspense>
  );
}
export default App;