import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Heading from './Components/Heading/Heading'
import Calculation from './Components/Calculations/Calculation'
import Residencies from './Components/Residencies/Residencies'
import Loan from './Components/Loan/Loan'
import Cards from './Components/Cards/Cards'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Heading/>
      <Calculation/>
      <Residencies/>
      <Loan/>
      <Cards/>
    </>
  )
}

export default App
