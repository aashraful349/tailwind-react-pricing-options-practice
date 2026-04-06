import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'

const pricingPromise=async()=>{
  const res=await fetch('pricingData.json')
  return res.json()
}

function App() {
  const pricingPromisee=pricingPromise();
  return (
    <>
      <header>
        {/* <DaisyNav/> */}
        <NavBar />

      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOptions pricingPromisee={pricingPromisee}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
