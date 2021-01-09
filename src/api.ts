import { Tweet } from "./domain/tweet";

const fetchData = async (url: string) => {
  return await fetch(url);
};

export const fetchTweets = async (start: Date, end: Date) => {
  //const url = "http://localhost:10000/articles";
  //fetchData(url)
  //  .then((res) => {
  //    console.log(res);
  //    return res.body;
  //  })
  //  .catch((err) => {
  //    console.log(err);
  //    throw err;
  //  });
  const a = new Tweet("aaa", start);
  const b = new Tweet("ccc", end);
  return [a, b];
};
