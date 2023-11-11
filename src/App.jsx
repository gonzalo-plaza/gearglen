import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { useSidebarStore } from './store/sidebarStore'
function App() {
  const showSidebar = useSidebarStore(state => state.showSidebar);
  return (
    <>
      <Header/>
      {showSidebar && <Sidebar/>}
    </>
  )
}

export default App
