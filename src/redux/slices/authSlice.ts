import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  idFamiglia: number | null;
  idAnagrafica: number | null;
  email: string | null;
  fullName: string;
  role: string;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('CSI_Bisuschio_authToken') || null,
  idFamiglia: 1,
  idAnagrafica: 1,
  email: localStorage.getItem('CSI_Bisuschio_email') || null,
  fullName: 'CSI Bisuschio',
  role: 'Amministratore',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ Email: string; Password: string }>) {
      state.email = action.payload.Email;
      state.token = action.payload.Password;
      localStorage.setItem('CSI_Bisuschio_authToken', state.token); // Persist token
      localStorage.setItem('CSI_Bisuschio_email', state.email); // Persist email
    },
    logout(state) {
      state.token = null;
      state.email = null;
      localStorage.removeItem('CSI_Bisuschio_authToken');
      localStorage.removeItem('CSI_Bisuschio_email');
    },
    forgotPassword(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    resetPassword(state, action: PayloadAction<{ token: string; Password: string }>) {
      state.token = action.payload.token;
      localStorage.setItem('CSI_Bisuschio_authToken', state.token); // Persist token
    }
  },
});

export const {
  login,
  logout,
  forgotPassword,
  resetPassword,
} = authSlice.actions;
export default authSlice.reducer;
