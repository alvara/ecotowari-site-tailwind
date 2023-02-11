import axios from 'axios';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { ISticker, IInstagram } from '../type';

interface IAirtableProvider {
  children: React.ReactNode;
}

interface IAirtableContext {
  stickersState: [ISticker[], Dispatch<SetStateAction<ISticker[]>>];
  instagramState: [IInstagram[], Dispatch<SetStateAction<IInstagram[]>>];
}
const AirtableContext = createContext({} as IAirtableContext);

function AirtableProvider({ children }: IAirtableProvider) {
  const [stickers, setStickers] = useState<ISticker[]>([]);
  const [instagram, setInstagram] = useState<IInstagram[]>([]);

  // populate sticker state with api data
  useEffect(() => {
    async function fetchStickers() {
      try {
        const data = await axios.get('/api/stickers/').then((res) => res.data);
        setStickers(data);
      } catch (error) {
        console.log('Error fetching sticker data..');
      }
    }

    fetchStickers();
  }, []);

  // populate instagram state with api data
  useEffect(() => {
    async function fetchStickers() {
      try {
        const data = await axios.get('/api/instagram/').then((res) => res.data);
        console.log('instagram global: ', data);
        setInstagram(data);
      } catch (error) {
        console.log('Error fetching sticker data..');
      }
    }

    fetchStickers();
  }, []);

  return (
    <AirtableContext.Provider
      value={{
        stickersState: [stickers, setStickers],
        instagramState: [instagram, setInstagram],
      }}
    >
      {children}
    </AirtableContext.Provider>
  );
}

export { AirtableContext, AirtableProvider };
