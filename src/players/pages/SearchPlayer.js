import React, { useEffect, useState, useContext } from "react";
import PlayerList from "../components/PlayerList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Presupuesto from "../../shared/components/Navigation/Presupuesto";
import { AuthContext } from "../../shared/context/auth-context";
import SearchBox from "../components/SearchBox";

const SearchPlayer = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPlayers, setLoadedPlayers] = useState();
  const [update, setUpdate] = useState(false);
  const auth = useContext(AuthContext);
  const [searchField, setSearchField] = useState("");
  const [searchPosition, setSearchPosition] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/players/top/ofertasrealizadas"
        );

        setLoadedPlayers(responseData.players);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest, update]);

  const playerDeletedHandler = (deletedPlayerId) => {
    setLoadedPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== deletedPlayerId)
    );
  };
  const updateHandler = () => {
    setUpdate(!update);
  };

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const onSearchPosition = (event) => {
    setSearchPosition(event.target.value);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {auth.isLoggedIn && !isLoading && loadedPlayers && (
        <Presupuesto></Presupuesto>
      )}
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlayers && (
        <React.Fragment>
          <SearchBox
            searchChange={onSearchChange}
            searchPosition={onSearchPosition}
          />
          <PlayerList
            items={loadedPlayers.filter((player) => {
              return (
                player.title
                  .toLowerCase()
                  .includes(searchField.toLowerCase()) &&
                player.address
                  .toLowerCase()
                  .includes(searchPosition.toLowerCase())
              );
            })}
            onUpdate={updateHandler}
            onDeletePlayer={playerDeletedHandler}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default SearchPlayer;
