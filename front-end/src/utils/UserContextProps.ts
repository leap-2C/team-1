export interface UserContextProps {
  token: string | null;
  userId: number | null;
  setToken: (token: string | null) => void;
  setUserId: (id: number | null) => void;
}
