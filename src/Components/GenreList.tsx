import useGenres from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

import getCropedImageUrl from "../services/Image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading } = useGenres();

  const selectedGenreID = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreID = useGameQueryStore((s) => s.setGenreId);

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCropedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreID ? "bold" : "normal"}
                onClick={() => setSelectedGenreID(genre.id)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
