import { SpeakerphoneIcon } from "@heroicons/react/outline";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavBarButton } from "./components/common/NavBarButton";

import { NavBarLink } from "./components/common/NavBarLink";
import { FeedPage } from "./pages/FeedPage";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen bg-slate-100">
        <nav className="px-5 text-white bg-gray-800">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <SpeakerphoneIcon className="w-7 h-7" />
              </Link>
              <div className="flex items-baseline ml-10 space-x-4">
                <NavBarLink label="Feed" badge to="/" />
                <NavBarLink label="Add a chirp" to="/addchirp" />
              </div>
            </div>
            <div className="flex items-center">
              <NavBarButton label="Log out" />
            </div>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<FeedPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
