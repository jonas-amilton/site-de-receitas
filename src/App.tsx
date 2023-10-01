import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./config/layout/DefaultLayout";
import { Routers } from "./Routers/Routers";
import { CssBaseline } from "@mui/material";


function App() {
  return (

        <BrowserRouter>
          <CssBaseline />
          <DefaultLayout>
            <Routers />
          </DefaultLayout>
        </BrowserRouter>

  );
}

export default App;
