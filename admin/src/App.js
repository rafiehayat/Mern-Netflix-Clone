import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Redirect,
//   Navigate,
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import { Movie } from "@material-ui/icons";
import NewMovie from "./pages/newMovie/NewMovie";

function App() {
  const { user } = useContext(AuthContext);
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/login">
    //       {user ? <Navigate to="/" /> : <Login />}
    //     </Route>
    //     {user && (
    //       <>
    //         <Topbar />
    //         <div className="container">
    //           <Sidebar />
    //           <exact path="/" element={<Home />} />
    //           <Route exact path="/users" element={<UserList />} />
    //           <Route path="/user/:userId" element={<User />} />
    //           <exact path="/newUser" element={<NewUser />} />
    //           <exact path="/movies" element={<MovieList />} />
    //           <Route exact path="/movie/:movieId" element={<Movie />} />
    //           <exact path="/newMovie" element={<NewMovie />} />
    //           <Route exact path="/lists" element={<ListList />} />
    //           <Route exact path="/list/:listId">
    //             element={<List />}
    //           </Route>
    //           <exact path="/newlist" element={<NewList />} />
    //         </div>
    //       </>
    //     )}
    //   </Routes>
    // </Router>
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/movie/:movieId">
                <Movie />
              </Route>
              <Route path="/newMovie">
                <NewMovie />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
