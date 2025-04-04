import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { removeNotification } from "./redux/slices/notificationSlice";
import { PopupProvider } from "./context/PopupContext";

import Iscrizione from "./pages/Iscrizione";
import Profilo from "./pages/Profilo";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import ResetPassword from "./pages/ResetPassword";

import Notifications from "./components/utils/Notifications";
import Popup from "./components/popup/Popup";
import Sidebar from "./components/sidebar/Sidebar";
import Corsi from "./pages/Corsi";
import Corso from "./pages/Corso";

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PopupProvider>{children}</PopupProvider>
    </Provider>
  );
}

function AppComponents() {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector((state) => state.notification);

  return (
    <>
      <Notifications
        notifications={notifications}
        removeNotification={(id) => dispatch(removeNotification(id))}
      />

      <Popup />
    </>
  );
}

function AppRoutes() {
  const isAuthenticated = useAppSelector((state) => !!state.auth.token);

  return (
    <Router>
      <div className="h-svh flex">
        <div className="pt-6">
          <Sidebar />
        </div>

        <div className="flex-1 overflow-auto p-6">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Iscrizione />
                </ProtectedRoute>
              }
            />
            <Route
              path="/corsi"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Corsi />
                </ProtectedRoute>
              }
            />
            <Route
              path="/corsi/:corsoId"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Corso />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profilo"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profilo />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AppProviders>
      <AppComponents />
      <AppRoutes />
    </AppProviders>
  );
}

export default App;
