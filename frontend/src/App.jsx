import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
    
    </>
  )
}

export default App
