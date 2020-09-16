import React, { createContext, useState } from 'react'
import Cakes from './Cakes'

const allCakesDetail = 'All cakes are free'

export const CakeContext = createContext()

function App() {
  const [detail, setDetail] = useState(allCakesDetail)
  return (
    <CakeContext.Provider value={detail}>
      <div style={{ padding: '10px' }}>
        <h1>Star wars cakes!!</h1>
        <button
          type="button"
          onClick={() => setDetail('Now cakes cost a lot of money')}
        >
          change detail
        </button>
        <Cakes />
      </div>
    </CakeContext.Provider>
  )
}

export default App
