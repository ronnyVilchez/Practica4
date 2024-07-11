
import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import { UserCard } from './components/UserCard';
import { Nav } from './components/Nav';

function App() {


  const [data, setData] = useState([])
  const [result, setResult] = useState('')

  async function fetchD() {
    const importt = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await importt.json()
    setData(data);
    setResult(data)
  }
  useEffect(() => {
    fetchD()
  }, [])

  return (
    <>
      <Nav
        data={data}
        setResult={setResult} />
      <UserCard
        result={result}
      />
    </>
  )
}

export default App
