import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LaunchpadProject from './pages/projects/Launchpad'
import OpenSponsorProject from './pages/projects/OpenSponsor'
import CredabilityProject from './pages/projects/Credability'
import CobiProject from './pages/projects/Cobi'
import TalmenaProject from './pages/projects/Talmena'
import SkiplinoProject from './pages/projects/Skiplino'
import SaboonProject from './pages/projects/Saboon'
import FounderiseProject from './pages/projects/Founderise'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/launchpad" element={<LaunchpadProject />} />
      <Route path="/projects/opensponsor" element={<OpenSponsorProject />} />
      <Route path="/projects/credability" element={<CredabilityProject />} />
      <Route path="/projects/cobi" element={<CobiProject />} />
      <Route path="/projects/talmena" element={<TalmenaProject />} />
      <Route path="/projects/skiplino" element={<SkiplinoProject />} />
      <Route path="/projects/saboon" element={<SaboonProject />} />
      <Route path="/projects/founderise" element={<FounderiseProject />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App