import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import useGames, { Game } from "../hooks/useGames";
import useGame from "../hooks/useGame";

const GameDetalePage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GameDetalePage;
