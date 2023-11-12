import Header from './components/header/Header'
import { HomeInfoCards } from './components/homeInfoCards/HomeInfoCards'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <div className='main-container'>
        <Header />
        <main role='main' className='main'>
          <HomeInfoCards/>
        </main>
      </div>
      <Sidebar />
    </>
  )
}

export default App
