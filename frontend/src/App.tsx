import { useAuth0 } from "@auth0/auth0-react";
import { SpeakerphoneIcon } from "@heroicons/react/outline";
import { Routes, Route, Link } from "react-router-dom";

import { AuthenticationButton } from "./components/common/AuthenticationButton";
import { NavBarLink } from "./components/common/NavBarLink";
import { ProtectedRoute } from "./components/common/ProtectedRoute";
import { AddChirpPage } from "./pages/AddChirpPage";
import { FeedPage } from "./pages/FeedPage";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return null;
  }

  return (
    <div className="h-full min-h-screen bg-slate-100">
      <nav className="sticky top-0 px-5 text-white bg-gray-800">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <SpeakerphoneIcon className="w-7 h-7" />
            </Link>
            <div className="flex items-baseline ml-10 space-x-4">
              <NavBarLink label="Feed" badge to="/" />
              {isAuthenticated && (
                <NavBarLink label="Add a chirp" to="/addchirp" />
              )}
            </div>
          </div>
          <div className="flex items-center">
            <AuthenticationButton />
          </div>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route
            path="/addchirp"
            element={
              <ProtectedRoute>
                <AddChirpPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
