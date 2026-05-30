import axios from "axios";

import { fetchAuthSession } from "aws-amplify/auth";


const BASE_URL =
  "https://kghocttqxg.execute-api.ap-south-1.amazonaws.com/prod";


async function authHeaders() {

  const session =
    await fetchAuthSession();

  const token =
    session.tokens.idToken.toString();

  return {

    headers: {

      Authorization: token
    }
  };
}


export async function getTrend(days = 7) {

  return axios.get(

    `${BASE_URL}/sentiment-trend?days=${days}`,

    await authHeaders()
  );
}


export async function getCompanyScores() {

  return axios.get(

    `${BASE_URL}/company-scores`,

    await authHeaders()
  );
}


export async function getNews() {

  return axios.get(

    `${BASE_URL}/news?limit=200`,

    await authHeaders()
  );
}


export async function getAlerts() {

  return axios.get(

    `${BASE_URL}/alerts?limit=20`,

    await authHeaders()
  );
}