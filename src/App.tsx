import { AppRouter } from "router/AppRouter";
import { NavigationBar } from "@components/components";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <NavigationBar />
      </header>
      <main>
        <AppRouter />
      </main>
    </div>
  )
}

export default App
