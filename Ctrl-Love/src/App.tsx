import LoginForm from './components/LoginForm'
import './App.css'

function App() {
  return (
    <>
      <div><img src='./assets/logo.svg' alt='Image of our logo'></img></div>
      <div className='app'>
        <div className='landing-left'>

        </div>
        <div className="landing-right">
          <LoginForm />
        </div>
      </div>
    </>
  )
}

export default App
