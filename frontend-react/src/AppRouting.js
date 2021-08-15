import {Router, Switch, Route} from "wouter"
import Navigation from "./components/navigation/Navigation.jsx";
import AboutUs from "./pages/about-us/AboutUs.jsx";
import CourseSingle from "./pages/course-single/CourseSingle.jsx";
import Home from "./pages/home/Home.jsx";
import PageNotFound from "./pages/page-not-found/PageNotFound.jsx";


const AppRouting = () => {
  return(
    <Router>
      <Navigation />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/cursos" component={Home} />
        <Route path="/cursos/:id" component={CourseSingle} />
        <Route component={PageNotFound} />
      </Switch>

    </Router>
  )
}

export default AppRouting;
