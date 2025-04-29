'use client'

import { useState } from 'react'

// A reusable counter component that accepts props from its parent
export default function Counter({ count, onIncrement, onDecrement, label = 'Counter', color = 'blue' }) {
  // Local state for this component only
  const [localCount, setLocalCount] = useState(0)
  
  // Determine button colors based on prop
  const buttonClass = color === 'blue' 
    ? 'bg-blue-600 hover:bg-blue-500' 
    : 'bg-purple-600 hover:bg-purple-500'
  
  return (
    <div className="p-6 border border-slate-700 rounded-lg shadow-md bg-slate-800">
      <h3 className="text-xl font-medium mb-4 text-blue-300">{label}</h3>
      
      <div className="mb-4">
        <p className="text-lg font-medium">Shared State Value: <span className="font-bold text-cyan-300">{count}</span></p>
        <div className="flex space-x-2 mt-2">
          <button 
            onClick={onDecrement}
            className={`px-3 py-1 ${buttonClass} text-white rounded transition-colors`}
          >
            Decrement
          </button>
          <button 
            onClick={onIncrement}
            className={`px-3 py-1 ${buttonClass} text-white rounded transition-colors`}
          >
            Increment
          </button>
        </div>
      </div>
      
      <div className="border-t border-slate-700 pt-4">
        <p className="text-lg font-medium">Local State Value: <span className="font-bold text-emerald-300">{localCount}</span></p>
        <div className="flex space-x-2 mt-2">
          <button 
            onClick={() => setLocalCount(localCount - 1)}
            className={`px-3 py-1 ${buttonClass} text-white rounded transition-colors`}
          >
            Decrement Local
          </button>
          <button 
            onClick={() => setLocalCount(localCount + 1)}
            className={`px-3 py-1 ${buttonClass} text-white rounded transition-colors`}
          >
            Increment Local
          </button>
        </div>
      </div>
    </div>
  )
}
