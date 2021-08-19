/* import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import OfertasList from "../components/OfertasList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const PlayerOfertas = () => {
  const [loadedPlayers, setLoadedPlayers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const 
  const playerId = useParams().playerId;

  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/players/user/${playerId}`
        );
        setLoadedPlayers(responseData.players);
      } catch (err) {}
    };
    fetchOfertas();
  }, [sendRequest, userId]);

  const playerDeletedHandler = (deletedPlayerId) => {
    setLoadedPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== deletedPlayerId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlayers && (
        <OfertasList
          items={loadedPlayers}
          onDeletePlayer={playerDeletedHandler}
        />
      )}
    </React.Fragment>
  );
};

export default PlayerOfertas;
 */
