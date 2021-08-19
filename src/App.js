import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
//import Users from "./users/pages/Users";
//import NewPlayer from "./players/pages/NewPlayer";
//import UserPlayers from "./players/pages/UserPlayers";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
//import UsersPrimera from "./users/pages/UsersPrimera";
//import UsersSegunda from "./users/pages/UsersSegunda";
//import UsersTercera from "./users/pages/UsersTercera";
//import MercadoPlayers from "./players/pages/MercadoPlayers";
//import UpdatePlayer from "./players/pages/UpdatePlayer";
//import Auth from "./users/pages/Auth";
//import UsersCuarta from "./users/pages/UsersCuarta";
import { AuthContext } from "./shared/context/auth-context";
/* import OfertasRealizadas from "./ofertas/pages/OfertasRealizadas";
import OfertasRecibidas from "./ofertas/pages/OfertasRecibidas"; */
import { useAuth } from "./shared/hooks/auth-hook";

const Users = React.lazy(() => import("./users/pages/Users"));
const NewPlayer = React.lazy(() => import("./players/pages/NewPlayer"));
const UpdatePlayer = React.lazy(() => import("./players/pages/UpdatePlayer"));
const UsersPrimera = React.lazy(() => import("./users/pages/UsersPrimera"));
const UsersSegunda = React.lazy(() => import("./users/pages/UsersSegunda"));
const UsersTercera = React.lazy(() => import("./users/pages/UsersTercera"));
const UsersCuarta = React.lazy(() => import("./users/pages/UsersCuarta"));
const Auth = React.lazy(() => import("./users/pages/Auth"));
const TransferWall = React.lazy(() => import("./messages/pages/TransferWall"));
const OfertasRealizadas = React.lazy(() =>
  import("./ofertas/pages/OfertasRealizadas")
);
const OfertasRecibidas = React.lazy(() =>
  import("./ofertas/pages/OfertasRecibidas")
);
const UserPlayers = React.lazy(() => import("./players/pages/UserPlayers"));
const MercadoPlayers = React.lazy(() =>
  import("./players/pages/MercadoPlayers")
);

const App = () => {
  const {
    token,
    login,
    logout,
    userId,
    userPresupuesto,
    userName,
    userTeam,
    userImage,
  } = useAuth();
  let routes;

  if (token && userTeam !== "Sin equipo") {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/players/mercado" exact>
          <MercadoPlayers></MercadoPlayers>
        </Route>
        <Route path="/:userId/players" exact>
          <UserPlayers></UserPlayers>
        </Route>
        <Route path="/get/muro" exact>
          <TransferWall></TransferWall>
        </Route>
        <Route path="/players/new" exact>
          <NewPlayer></NewPlayer>
        </Route>
        <Route path="/players/:playerId">
          <UpdatePlayer></UpdatePlayer>
        </Route>
        <Route path="/primeradivision" exact>
          <UsersPrimera></UsersPrimera>
        </Route>
        <Route path="/segundadivision" exact>
          <UsersSegunda></UsersSegunda>
        </Route>
        <Route path="/terceradivision" exact>
          <UsersTercera></UsersTercera>
        </Route>
        <Route path="/cuartadivision" exact>
          <UsersCuarta></UsersCuarta>
        </Route>
        <Route path="/get/ofertasrecibidas/:userId" exact>
          <OfertasRecibidas></OfertasRecibidas>
        </Route>
        <Route path="/get/ofertasrealizadas" exact>
          <OfertasRealizadas></OfertasRealizadas>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/primeradivision" exact>
          <UsersPrimera></UsersPrimera>
        </Route>
        <Route path="/segundadivision" exact>
          <UsersSegunda></UsersSegunda>
        </Route>
        <Route path="/terceradivision" exact>
          <UsersTercera></UsersTercera>
        </Route>
        <Route path="/cuartadivision" exact>
          <UsersCuarta></UsersCuarta>
        </Route>
        <Route path="/:userId/players" exact>
          <UserPlayers></UserPlayers>
        </Route>
        <Route path="/auth">
          <Auth></Auth>
        </Route>
        <Redirect to="/auth"></Redirect>
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        userPresupuesto: userPresupuesto,
        userName: userName,
        userTeam: userTeam,
        userImage: userImage,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation></MainNavigation>
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner></LoadingSpinner>
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
