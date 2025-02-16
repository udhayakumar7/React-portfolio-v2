
import './App.css';
import Description from './components/Description'
import Header from './components/Header'
import Hero from './components/Hero'
import Loader from './components/Loader'
import MyWork from './components/MyWork';
import Scroller from './components/Scroller'

function App() {
  

  return (
    <>
   <Loader />
   <Header />
   <Hero />
   <Scroller />
   <Description />
   <MyWork />
 
  
    </>
  )
}

export default App
