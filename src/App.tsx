import {Route, Routes} from "react-router-dom";

import {Layout} from "./components/layout/layout";
import {Home} from "./pages/home";
import {Portfolio} from "./pages/portfolio";
import PrivateRoute from "./routes/PrivateRoutes";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route element={<Home />} path="/" />

                <Route element={<PrivateRoute />}>
                    <Route element={<Portfolio />} path="/portfolio" />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
