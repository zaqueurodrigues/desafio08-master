import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchProfile from "./pages/SearchProfile";

const Routes = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/search">
                    <SearchProfile />
                </Route>
            </Switch>
        
        </BrowserRouter>
    );

}

export default Routes;