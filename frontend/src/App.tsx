import { SpeakerphoneIcon } from "@heroicons/react/outline";

import { ChirpList } from "./components/chirps";
import { NavBarLink } from "./components/common/NavBarLink";

function App() {
  return (
    <div className="h-screen bg-slate-100">
      <nav className="px-5 text-white bg-gray-800">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <SpeakerphoneIcon className="w-7 h-7" />
            <div className="flex items-baseline ml-10 space-x-4">
              <NavBarLink label="Feed" badge active />
              <NavBarLink label="Add a chirp" />
            </div>
          </div>
          <div className="flex items-center">
            <NavBarLink label="Log out" />
          </div>
        </div>
      </nav>
      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <ChirpList />
        </div>
      </main>
    </div>
  );
}

export default App;
