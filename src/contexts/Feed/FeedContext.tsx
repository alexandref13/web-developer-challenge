/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react';
import { FormContext } from '../Form/FormContext';

type FeedProviderProps = {
  children: ReactNode;
};

type FeedContextData = {
  jsons: {
    id: number;
    message: string;
    user: string;
  }[];

  id: number;

  setJsons: Dispatch<
    SetStateAction<
      {
        id: number;
        message: string;
        user: string;
      }[]
    >
  >;
  setId: Dispatch<SetStateAction<number>>;
  handleDeletePost: (id: number) => void;
};

export const FeedContext = createContext({} as FeedContextData);

export const FeedProvider = ({ children }: FeedProviderProps) => {
  const [id, setId] = useState(2);
  const [jsons, setJsons] = useState([
    {
      id: 1,
      message:
        'Nossa como foi bom esse site, foi de grande ajuda, obrigado ao desenvolvedor do site que fez essa maravilha. precisa mesmo ser contratado',
      user: 'Alexandre Fernandes'
    }
  ]);

  function handleDeletePost(id: number) {
    setJsons((current) =>
      current.filter((post) => {
        return post.id !== id;
      })
    );
  }

  return (
    <FeedContext.Provider
      value={{
        jsons,
        setJsons,
        id,
        setId,
        handleDeletePost
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};
