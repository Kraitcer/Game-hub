import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../Components/ExpandableText";

import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import DefinitionItem from "../Components/DefinitionItem";
import CriticScore from "../Components/CriticScore";
import GameAtributs from "../Components/GameAtributs";
import GameTrailer from "../Components/GameTrailer";

const GameDetalePage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAtributs game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetalePage;
