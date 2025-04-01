import react from 'react';
export default function App(){
  return (
   <div className="min-h-screen bg-gray-100">
    
          {/* Hero Section */}
    
          <header className="bg-green-600 text-white text-center py-20">
    
            <h1 className="text-4xl font-bold">Swap Fashion, Save the Planet</h1>
    
            <p className="mt-3 text-lg">Exchange your pre-loved clothes and refresh your wardrobe sustainably.</p>
    
            <button className="mt-5 px-6 py-2 bg-white text-green-600 font-bold rounded-lg shadow-md hover:bg-gray-200">Get Started</button>
    
          </header>
    
    
    
          {/* Featured Items */}
    
          <section className="p-10 text-center">
    
            <h2 className="text-2xl font-semibold">Featured Swaps</h2>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    
              <div className="bg-white p-4 rounded-lg shadow-md">
    
                <img src="https://via.placeholder.com/200" alt="Fashion Item" className="rounded-md" />
    
                <p className="mt-2 font-medium">Stylish Denim Jacket</p>
    
              </div>
    
              <div className="bg-white p-4 rounded-lg shadow-md">
    
                <img src="https://via.placeholder.com/200" alt="Fashion Item" className="rounded-md" />
    
                <p className="mt-2 font-medium">Vintage Leather Bag</p>
    
              </div>
    
              <div className="bg-white p-4 rounded-lg shadow-md">
    
                <img src="https://via.placeholder.com/200" alt="Fashion Item" className="rounded-md" />
    
                <p className="mt-2 font-medium">Trendy Sneakers</p>
    
              </div>
    
            </div>
    
          </section>
    
    
    
          {/* How It Works */}
    
          <section className="bg-white p-10 text-center">
    
            <h2 className="text-2xl font-semibold">How It Works</h2>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    
              <div className="p-4">
    
                <h3 className="font-bold">1. List Your Item</h3>
    
                <p>Upload details and images of the clothing you want to swap.</p>
    
              </div>
    
              <div className="p-4">
    
                <h3 className="font-bold">2. Find a Match</h3>
    
                <p>Browse listings and send swap requests.</p>
    
              </div>
    
              <div className="p-4">
    
                <h3 className="font-bold">3. Swap & Enjoy</h3>
    
                <p>Once accepted, exchange items and refresh your wardrobe.</p>
    
              </div>
    
            </div>
    
          </section>
    
        </div>
    
      );
    
    };
    
    
  