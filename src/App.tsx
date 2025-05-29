import { AppRouter } from "router/AppRouter";
import { NavigationBar } from "@components/components";
import { FloatingNavBarLayout } from "@layouts/FloatingNavBarLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <FloatingNavBarLayout navigation={<NavigationBar />}>
        <AppRouter />
      </FloatingNavBarLayout>
    </BrowserRouter>
  );
}

export default App
