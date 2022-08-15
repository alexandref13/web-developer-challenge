/* eslint-disable prettier/prettier */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';
import { FeedContext } from '../Feed/FeedContext';

type FormProviderProps = {
  children: ReactNode;
};

type FormContextData = {
  name: string;
  message: string;
  isAbleToPost: boolean;
  hasClick: boolean;
  setHasClick: Dispatch<SetStateAction<boolean>>;
  setIsAbleToPost: Dispatch<SetStateAction<boolean>>;
  setName: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
  handlePost: () => void;
  handleClick: () => void;
  handleClear: () => void;
};

export const FormContext = createContext({} as FormContextData);

export const FormProvider = ({ children }: FormProviderProps) => {
  const { id, jsons, setId, setJsons } = useContext(FeedContext);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isAbleToPost, setIsAbleToPost] = useState(false);

  const [hasClick, setHasClick] = useState(false);

  function handleClick() {
    setHasClick(!hasClick);
  }

  useEffect(() => {
    if (name && message && hasClick) {
      setIsAbleToPost(true);
    } else {
      setIsAbleToPost(false);
    }
  }, [name, message, hasClick]);

  function handlePost() {
    if (name && message && hasClick) {
      setId(id + 1);

      setJsons([
        ...jsons,
        {
          id: id,
          message,
          user: name
        }
      ]);
    }
  }

  function handleClear() {
    setName('');
    setMessage('');
    setHasClick(false);
  }

  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        message,
        setMessage,
        handlePost,
        isAbleToPost,
        setIsAbleToPost,
        hasClick,
        setHasClick,
        handleClick,
        handleClear
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
