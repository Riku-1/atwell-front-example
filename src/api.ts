import axios from "axios";
import { BACKEND_HOST, BACKEND_PORT } from "./config";
import { Tweet } from "./domain/tweet";
import { formatDate } from "./utils/formatter";

/**
 * This is wrap method for http GET request.
 * @param url
 * @returns
 */
const get = async (url: string) => {
  return axios.get(url, { timeout: 100000 });
};

/**
 * Fetch tweets from backend api
 * This method gets tweets from "start" date to "to" date
 * @param start
 * @param end
 * @returns
 */
export const fetchTweets = async (start: Date, end: Date): Promise<Tweet[]> => {
  const url = new URL(BACKEND_HOST + ":" + BACKEND_PORT + "/tweets");
  url.search = new URLSearchParams([
    ["from", formatDate(start)],
    ["to", formatDate(end)],
  ]).toString();

  return get(url.toString())
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`Status code ${res.status} is not equal to 200`);
      }

      return res.data.map(
        (tweet: any) => new Tweet(tweet["Comment"], tweet["CreatedAt"])
      );
    })
    .catch((err) => {
      throw new Error("Failed to connect to the back-end api");
    });
};
