import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import Restaurants from "./pages/restaurants/restaurants";
import MealKits from "./pages/mealk/mealKits";
import MyMeals from "./pages/meals/myMeals";
import MyCalendar from "./pages/calendar/myCalendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/mealkits" element={<MealKits />} />
        <Route path="/mycalendar" element={<MyCalendar />} />
        <Route path="/my-meals" element={<MyMeals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
