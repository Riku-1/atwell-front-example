import { BACKEND_HOST, BACKEND_PORT } from "./config";
import { Tweet } from "./domain/tweet";

const fetchData = async (url: string) => {
  return await fetch(url);
};

export const fetchTweets = async (start: Date, end: Date) => {
  const url = BACKEND_HOST + ":" + BACKEND_PORT + "/tweets";
  return fetchData(url)
    .then((res) =>
      res
        .json()
        .then((json: []) =>
          json.map((tweet) => new Tweet(tweet["Comment"], tweet["CreatedAt"]))
        )
    )
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
