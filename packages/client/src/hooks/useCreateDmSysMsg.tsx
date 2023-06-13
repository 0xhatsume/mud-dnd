import React from 'react';
import { useMutation } from "@tanstack/react-query";

export const useCreateDmSysMsg = () => {
  return useMutation(
    async ({game_description, temperature}:
      {game_description: string,
      temperature: number}
    ): Promise<{
      dmsysmsg: string
    }> => {
      return fetch(`${import.meta.env.VITE_LLM_URL}createdmsysmsg`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          temperature: temperature,
          game_description: game_description,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
      }
  );
};