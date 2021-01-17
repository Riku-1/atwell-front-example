import { BACKEND_HOST, BACKEND_PORT } from "./config";
import { Tweet } from "./domain/tweet";
import { formatDate } from "./utils/formatter";

const fetchData = async (url: string) => {
  return await fetch(url);
};

export const fetchTweets = async (start: Date, end: Date) => {
  const url = new URL(BACKEND_HOST + ":" + BACKEND_PORT + "/tweets");
  url.search = new URLSearchParams([
    ["from", formatDate(start)],
    ["to", formatDate(end)],
  ]).toString();

  return fetchData(url.toString()).then((res) =>
    res
      .json()
      .then((json: []) =>
        json.map((tweet) => new Tweet(tweet["Comment"], tweet["CreatedAt"]))
      )
  );
};
