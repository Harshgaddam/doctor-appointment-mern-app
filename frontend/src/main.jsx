import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import DoctorScreen from "./screens/DoctorScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import Doctors from "./screens/Doctors.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import MyAppointmentsScreen from "./screens/MyAppointmentsScreen.jsx";
import BookAppointmentScreen from "./screens/BookAppointmentScreen.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/:id" element={<DoctorScreen />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/my-appointments" element={<MyAppointmentsScreen />} />
      <Route path="/book-appointment" element={<BookAppointmentScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
