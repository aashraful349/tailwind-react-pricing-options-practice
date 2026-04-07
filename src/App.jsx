import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'


const pricingPromise=async()=>{
  const res=await fetch('pricingData.json')
  return res.json()
}
const marksPromise=axios.get('marksData.json');

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
        <ResultsChart></ResultsChart>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>
    </>
  )
}

export default App
