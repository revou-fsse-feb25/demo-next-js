'use client' // This directive is needed for client-side features like state

import { useState } from 'react'
import Counter from '../components/Counter'
import Card from '../components/Card'

export default function Home() {
  // State declaration - persists between renders and triggers re-renders when updated
  const [count, setCount] = useState(0)
  
  // Regular variable - doesn't persist between renders and won't trigger re-renders
  let regularVariable = 0
  
  const incrementVariable = () => {
    regularVariable += 1
    console.log('Variable value (won\'t update UI):', regularVariable)
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Next.js App Router Demo</h1>
      
      {/* React Fragment example - groups elements without adding extra nodes to DOM */}
      <>
        <section className="mb-8 p-6 bg-slate-800 rounded-lg w-full max-w-2xl shadow-md border border-slate-700">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">React Concepts Demo</h2>
          
          <div className="mb-6">
            <h3 className="text-xl mb-2 text-blue-400">State vs Variable</h3>
            <p className="mb-4 text-lg">Count (state): <span className="font-bold text-cyan-300">{count}</span></p>
            <p className="mb-4 text-lg">Regular variable: <span className="font-bold text-cyan-300">{regularVariable}</span></p>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors shadow-sm"
              >
                Update State (+1)
              </button>
              
              <button 
                onClick={incrementVariable}
                className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition-colors shadow-sm"
              >
                Update Variable (+1)
              </button>
            </div>
          </div>
        </section>
      </>
      
      {/* Reusable component with props */}
      <section className="w-full max-w-2xl space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300">Reusable Components with Props</h2>
        
        {/* Counter component with different props */}
        <Counter 
          count={count} 
          onIncrement={() => setCount(count + 1)}
          onDecrement={() => setCount(count - 1)}
          label="Main Counter"
          color="blue"
        />
        
        {/* Demonstrating the same component with different props */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Card 
            title="Virtual DOM" 
            content="React creates a virtual representation of the UI kept in memory and synced with the real DOM through a process called reconciliation."
            bgColor="bg-amber-900"
          />
          
          <Card 
            title="React Strict Mode" 
            content="Development-only mode that highlights potential problems in an application by intentionally double-invoking functions."
            bgColor="bg-emerald-900"
          />
          
          <Card 
            title="React Fragments" 
            content="Let you group a list of children without adding extra nodes to the DOM. Syntax: <></> or <React.Fragment>."
            bgColor="bg-violet-900"
          />
          
          <Card 
            title="Props in React" 
            content="Props are read-only inputs to components. They are passed from parent to child components and help make your components reusable."
            bgColor="bg-rose-900"
          />
        </div>
      </section>
    </main>
  )
}
