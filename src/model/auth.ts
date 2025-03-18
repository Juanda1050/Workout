export interface IAuthState {
    isAuthenticated: boolean;
    token: string | null;
  }
  
  export interface IAuthActions {
    setToken: (value: string | null) => void;
    setAuthenticated: (value: boolean) => void;
    clearAuth: () => void;
  }
  