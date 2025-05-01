// app/page.js
'use client';

import React, { useState, useEffect } from 'react';

const API_URL = 'https://64ca45bd700d50e3c7049e2f.mockapi.io/todo';

export default function TodoApp() {
  // State management
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Fetch all todos (READ operation)
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      
      const data = await response.json();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create a new todo (CREATE operation)
  const createTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newTodo }),
      });

      if (!response.ok) {
        throw new Error('Failed to create todo');
      }

      const createdTodo = await response.json();
      setTodos([...todos, createdTodo]);
      setNewTodo('');
    } catch (err) {
      setError(err.message);
    }
  };

  // Update a todo (UPDATE operation)
  const updateTodo = async (id) => {
    if (!editText.trim()) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editText }),
      });

      if (!response.ok) {
        throw new Error('Failed to update todo');
      }

      const updatedTodo = await response.json();
      setTodos(todos.map(todo => 
        todo.id === id ? updatedTodo : todo
      ));
      setEditingId(null);
      setEditText('');
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a todo (DELETE operation)
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }

      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Start editing a todo
  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.name);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingId(null);
    setEditText('');
  };

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Next.js CRUD Demo with Async Operations
        </h1>
        
        {/* Create Todo Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Create New Todo
          </h2>
          <form onSubmit={createTodo} className="flex gap-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter todo text..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add Todo
            </button>
          </form>
        </div>
        
        {/* Todo List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Todo List
            </h2>
            <button 
              onClick={fetchTodos}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
            >
              Refresh
            </button>
          </div>
          
          {/* Loading state */}
          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="ml-3 text-gray-600">Loading todos...</span>
            </div>
          )}
          
          {/* Error state */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700 mb-4">
              Error: {error}
            </div>
          )}
          
          {/* Todo items */}
          {!loading && !error && (
            <ul className="space-y-4">
              {todos.map(todo => (
                <li key={todo.id} className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0">
                  {editingId === todo.id ? (
                    // Edit mode
                    <div className="flex gap-2 flex-1">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-1 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => updateTodo(todo.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    // View mode
                    <>
                      <span className="text-gray-800">{todo.name}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEditing(todo)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
              {todos.length === 0 && !loading && (
                <li className="text-center text-gray-500 py-4">
                  No todos yet. Add one above!
                </li>
              )}
            </ul>
          )}
        </div>
        
        {/* Explanation section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            CRUD Operations Demonstrated:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h4 className="font-semibold text-green-600">CREATE</h4>
              <p>Add new todos using POST request</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600">READ</h4>
              <p>Fetch todos using GET request</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-600">UPDATE</h4>
              <p>Edit existing todos using PUT request</p>
            </div>
            <div>
              <h4 className="font-semibold text-red-600">DELETE</h4>
              <p>Remove todos using DELETE request</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}