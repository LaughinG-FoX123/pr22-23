import Card from './components/Card'
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading ]= useState(false)
  const [inputText, setInputText] = useState()

  useEffect(() => {
    fetchPotter()
  }, [inputText])

  const fetchPotter = async () => {
    
    let url = 'http://localhost:3000/api/characters'
    

    const responce = await fetch(url)
    const data = await responce.json()

    if( data.success) {
      setCharacters(data)
      setIsLoading(false)
    }
  }

  return (
    <>
      <header>
        <div>
          <h1>Harry Potter</h1>
          <p>View all characters from the Harry Potter universe</p>
          <div>
            <span>
              <h6>Name</h6>
              <input 
                type="text" 
                placeholder='Hermione' 
                className='inputs'
                value={inputText} 
                onInput={(e) => {setInputText(e.target.value)}}
              />
            </span>
            <span>
              <h6>School</h6>
              <select name="" id="" placeholder='Choose one' className='inputs'>
                <option value="Гриффиндор">Гриффиндор</option>
                <option value="Когтевран">Когтевран</option>
                <option value="Пуффендуй">Пуффендуй</option>
                <option value="Слизерин">Слизерин</option>
              </select>
            </span>
          </div>
        </div>
      </header>

      <main>
        { !isLoading ? <Card characters={characters}/> : <> Загрузка... </>}
        { !isLoading ? <Card characters={characters}/> : <> Загрузка... </>}
        { !isLoading ? <Card characters={characters}/> : <> Загрузка... </>}
      </main>
      
    </>
  )
}

export default App
