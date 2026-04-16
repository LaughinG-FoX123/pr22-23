import Card from './components/Card'
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [school, setSchool] = useState('Гриффиндор')
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState()
  const [isLoading, setIsLoading ]= useState(false)
  const [inputText, setInputText] = useState()

  useEffect(() => {
    fetchPotter()
  }, [inputText, school])

  const fetchPotter = async () => {
    
    let url = 'http://localhost:3000/api/characters?house=' + school;

    if(inputText) {
      url += "&search=" + inputText
    }

    console.log(url);
    
    setIsLoading(true)

    const responce = await fetch(url)
    const data = await responce.json();
    console.log('data->',data);
    

    if( data) {
      setCharacters(data)
      console.log(data)
      setIsLoading(false)
    }

    console.log(character)



    console.log(characters)
    console.log(character)
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
              <select value={school} onInput={(e) => {setSchool(e.target.value)}} placeholder='Choose one' className='inputs'>
                <option>Гриффиндор</option>
                <option>Когтевран</option>
                <option>Пуффендуй</option>
                <option>Слизерин</option>
              </select>
            </span>
          </div>
        </div>
      </header>

      <main>
        { !isLoading && characters ? (
          characters.map((character)=><Card character={character} />)
          ) : <> Загрузка... </>}
      </main>
      
    </>
  )
}

export default App
