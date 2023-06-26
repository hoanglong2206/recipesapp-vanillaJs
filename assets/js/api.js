"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID = "3b6ea347";
const APP_KEY = "4a687b46e8412cb7a52751e3b6fc9f08";
const TYPE = "public";

/**
 * @param {Array} queries
 * @param {Function} successCallback
 */

export const fetchData = async function (queries, successCallback) {
  const query = queries
    ?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

  const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${APP_KEY}&type=${TYPE}${
    query ? `&${query}` : ""
  }`;

  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  }
};
