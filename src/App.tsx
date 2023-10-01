import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./config/layout/DefaultLayout";
import { Routers } from "./Routers/Routers";

function App() {
  return (
    <BrowserRouter>
    <DefaultLayout>
      <Routers />
    </DefaultLayout>
  </BrowserRouter>
  );
}

export default App;
