import React from 'react';
import { useMutation } from "@tanstack/react-query";

export const useCreateWorld = () => {
  return useMutation(
    async ({quest, temperature}:
      {quest: string,
      temperature: number}
    ): Promise<{
      worlddescription: string;
      game_description: string;
    }> => {
      return fetch(`${import.meta.env.VITE_LLM_URL}createworld`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          temperature: temperature,
          quest: quest,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
      }
  );
};