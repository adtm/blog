import '../styles/globals.css'
import Header from '../components/Header/Header'

const App = ({ Component, pageProps }) => (
  <div className="w-full sm:w-2/3 xl:w-1/3 m-auto px-8">
    <Header />
    <Component {...pageProps} />
  </div>
)

export default App
