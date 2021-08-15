import {Router, Switch, Route} from "wouter"
import Navigation from "./components/navigation/Navigation.jsx";
import AboutUs from "./pages/about-us/AboutUs.jsx";
import Home from "./pages/home/Home.jsx";
import PageNotFound from "./pages/page-not-found/PageNotFound.jsx";


const AppRouting = () => {
  return(
    <Router>
      <Navigation />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/libros" component={Home} />
        <Route path="/libros/:id" component={Home} />
        <Route component={PageNotFound} />
      </Switch>

    </Router>
  )
}

export default AppRouting;
