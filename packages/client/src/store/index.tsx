import React from 'react';
import {atom} from 'jotai';

export const createWorldModalAtom = atom(false);

export const createPlayerModalAtom = atom(true);

export const createStoryLoadingAtom = atom(false);


export const index = () => {
  return (
    <div>index</div>
  )
}
