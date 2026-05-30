import React from "react";

import TrendChart from "./TrendChart";

import CompanyScores from "./CompanyScores";

import NewsFeed from "./NewsFeed";

import Alerts from "./Alerts";

import { signOut } from "aws-amplify/auth";


export default function Dashboard() {

  async function handleLogout() {

    try {

      await signOut();

      localStorage.clear();

      sessionStorage.clear();

      window.location.reload();

    } catch (err) {

      console.log(err);
    }
  }

  return (

    <div>

      <button onClick={handleLogout}>
        Logout
      </button>

      <TrendChart />

      <CompanyScores />

      <Alerts />

      <NewsFeed />

    </div>
  );
}
