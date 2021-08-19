import React from "react";
import Card from "../../shared/components/UIElements/Card";
import "./PlayerList.css";
import PlayerItem from "./PlayerItem";

const PlayerList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No se encontraron jugadores</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((player) => (
        <div className="child" key={player.id}>
          <PlayerItem
            key={player.id}
            id={player.id}
            image={player.image}
            title={player.title}
            clausula={player.clausula}
            transferible={player.transferible}
            marketValue={player.marketValue}
            address={player.address}
            team={player.team}
            discardExpiresDate={player.discardExpiresDate}
            clausulaInicial={player.clausulaInicial}
            ownerDiscard={player.ownerDiscard}
            creatorId={player.creator}
            escudo={player.escudo}
            creatorName={player.creatorName}
            Expires={player.Expires}
            ofertas={player.ofertas}
            onDelete={props.onDeletePlayer}
            onUpdate={props.onUpdate}
            onUpdateOffer={props.onUpdateOffer}
          ></PlayerItem>
        </div>
      ))}
    </ul>
  );
};

export default PlayerList;
