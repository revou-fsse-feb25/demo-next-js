'use client'

import React, { useEffect, useState } from 'react'

export default function Home() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCat, setSelectedCat] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState('card') // New state for view mode: 'card' or 'list'
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: '',
    description: '',
    imageUrl: '',
    price: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch all cats
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch('https://64ca45bd700d50e3c7049e2f.mockapi.io/cat')
        if (!response.ok) {
          throw new Error('Failed to fetch cats')
        }
        const data = await response.json()
        setCats(data)
      } catch (error) {
        console.error('Error fetching cats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCats()
  }, [])

  // Toggle between card and list view
  const toggleViewMode = () => {
    setViewMode(viewMode === 'card' ? 'list' : 'card')
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Add a new cat
  const handleAddCat = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://64ca45bd700d50e3c7049e2f.mockapi.io/cat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          breed: formData.breed,
          age: Number(formData.age),
          description: formData.description,
          imageUrl: formData.imageUrl,
          availability: 'available',
          price: formData.price,
          createdAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to add cat')
      }

      const newCat = await response.json()
      setCats([...cats, newCat])
      setIsAddModalOpen(false)
      resetForm()
    } catch (error) {
      console.error('Error adding cat:', error)
      alert('Failed to add cat. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Edit an existing cat
  const handleEditCat = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`https://64ca45bd700d50e3c7049e2f.mockapi.io/cat/${selectedCat.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          breed: formData.breed,
          age: Number(formData.age),
          description: formData.description,
          imageUrl: formData.imageUrl,
          price: formData.price,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update cat')
      }

      const updatedCat = await response.json()
      setCats(cats.map(cat => cat.id === selectedCat.id ? updatedCat : cat))
      setIsEditModalOpen(false)
    } catch (error) {
      console.error('Error updating cat:', error)
      alert('Failed to update cat. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Delete a cat
  const handleDeleteCat = async () => {
    setIsSubmitting(true)
    try {
      const response = await fetch(`https://64ca45bd700d50e3c7049e2f.mockapi.io/cat/${selectedCat.id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete cat')
      }

      setCats(cats.filter(cat => cat.id !== selectedCat.id))
      setIsDeleteModalOpen(false)
    } catch (error) {
      console.error('Error deleting cat:', error)
      alert('Failed to delete cat. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Open edit modal and populate form
  const openEditModal = (cat) => {
    setSelectedCat(cat)
    setFormData({
      name: cat.name,
      breed: cat.breed,
      age: cat.age,
      description: cat.description,
      imageUrl: cat.imageUrl,
      price: cat.price,
    })
    setIsEditModalOpen(true)
  }

  // Open delete modal
  const openDeleteModal = (cat) => {
    setSelectedCat(cat)
    setIsDeleteModalOpen(true)
  }

  // Reset form data
  const resetForm = () => {
    setFormData({
      name: '',
      breed: '',
      age: '',
      description: '',
      imageUrl: '',
      price: '',
    })
  }

  // Open add modal
  const openAddModal = () => {
    resetForm()
    setIsAddModalOpen(true)
  }

  return (
    <main className="min-h-screen p-8 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Cat Rental Service</h1>
          <div className="flex space-x-4">
            <button
              onClick={toggleViewMode}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              {viewMode === 'card' ? 'Switch to List View' : 'Switch to Card View'}
            </button>
            <button
              onClick={openAddModal}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Add New Cat
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <p>Loading cats...</p>
          </div>
        ) : viewMode === 'card' ? (
          // Card View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cats.map((cat) => (
              <div key={cat.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:border-gray-700">
                <img
                  src={cat.breed}
                  alt={cat.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{cat.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300">Breed: {cat.imageUrl}</p>
                  <p className="text-gray-600 dark:text-gray-300">Age: {cat.age} years</p>
                  <p className="font-semibold mt-2">${parseFloat(cat.price).toFixed(2)}/day</p>
                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={() => openEditModal(cat)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => openDeleteModal(cat)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Image</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Breed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Age</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price/Day</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {cats.map((cat) => (
                  <tr key={cat.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={cat.breed} alt={cat.name} className="h-12 w-12 rounded-full object-cover" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{cat.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{cat.imageUrl}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{cat.age} years</td>
                    <td className="px-6 py-4 whitespace-nowrap">${parseFloat(cat.price).toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openEditModal(cat)}
                          className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 text-xs"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => openDeleteModal(cat)}
                          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-xs"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Cat Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Add New Cat</h2>
            <form onSubmit={handleAddCat} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="breed" className="block mb-1">Breed (Image URL)</label>
                <input
                  type="text"
                  id="breed"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="age" className="block mb-1">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block mb-1">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  rows={4}
                />
              </div>
              
              <div>
                <label htmlFor="imageUrl" className="block mb-1">Breed Name</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="price" className="block mb-1">Price per day</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  step="0.01"
                />
              </div>
              
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                >
                  {isSubmitting ? 'Adding...' : 'Add Cat'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Cat Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Edit Cat</h2>
            <form onSubmit={handleEditCat} className="space-y-4">
              <div>
                <label htmlFor="edit-name" className="block mb-1">Name</label>
                <input
                  type="text"
                  id="edit-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="edit-breed" className="block mb-1">Breed (Image URL)</label>
                <input
                  type="text"
                  id="edit-breed"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="edit-age" className="block mb-1">Age</label>
                <input
                  type="number"
                  id="edit-age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="edit-description" className="block mb-1">Description</label>
                <textarea
                  id="edit-description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  rows={4}
                />
              </div>
              
              <div>
                <label htmlFor="edit-imageUrl" className="block mb-1">Breed Name</label>
                <input
                  type="text"
                  id="edit-imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="edit-price" className="block mb-1">Price per day</label>
                <input
                  type="number"
                  id="edit-price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  step="0.01"
                />
              </div>
              
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                >
                  {isSubmitting ? 'Updating...' : 'Update Cat'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Delete Cat</h2>
            <p className="mb-6">Are you sure you want to delete {selectedCat?.name}?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteCat}
                disabled={isSubmitting}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
              >
                {isSubmitting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}