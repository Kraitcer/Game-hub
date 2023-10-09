import { useQuery } from "@tanstack/react-query";
import React from "react";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClietn = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClietn.get(slug),
  });

export default useGame;
