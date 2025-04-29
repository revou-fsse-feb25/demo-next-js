'use client'

// TODO: Import useState from React
// TODO: Import the components you'll create

export default function Home() {
  // TODO: Create a state variable for the counter
  
  // Regular variable - doesn't persist between renders
  let regularVariable = 0;
  
  const incrementVariable = () => {
    // TODO: Implement incrementing the regular variable
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Next.js App Router Demo</h1>
      
      {/* TODO: Use React Fragment syntax here */}
        <section className="mb-8 p-6 bg-slate-800 rounded-lg w-full max-w-2xl shadow-md border border-slate-700">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">React Concepts Demo</h2>
          
          <div className="mb-6">
            <h3 className="text-xl mb-2 text-blue-400">State vs Variable</h3>
            {/* TODO: Display the state value */}
            {/* TODO: Display the regular variable */}
            
            <div className="flex space-x-4">
              {/* TODO: Create buttons to update state and variable */}
            </div>
          </div>
        </section>
      
      <section className="w-full max-w-2xl space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300">Reusable Components with Props</h2>
        
        {/* TODO: Add the Counter component with props */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* TODO: Add Card components */}
        </div>
      </section>
    </main>
  )
}