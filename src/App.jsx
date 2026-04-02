import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <header>
        <div>
          <h1>Harry Potter</h1>
          <p>View all characters from the Harry Potter universe</p>
          <div>
            <span>
              <h6>Name</h6>
              <input type="text" placeholder='Hermione' className='inputs'/>
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
        <Card />
        <Card />
        <Card />
      </main>
    </>
  )
}

export default App
