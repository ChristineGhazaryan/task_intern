import { BrowserRouter } from "react-router-dom"
import Routers from "./components/Routers"

const App = () => {
  return <>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </>
}

export default App