interface User {
  name: string;
  email: string;
  profile: string;
  phone: string;
  address: string;
}

interface AuthState {
  accessToken: string | null;
  user: User | null;
}

export type { User, AuthState };
