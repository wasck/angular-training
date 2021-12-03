import { ChuckNorrisJoke, ChuckNorrisJokeModel } from "./chuck-norris.model";

export function toChuckNorrisJoke(joke: ChuckNorrisJokeModel): ChuckNorrisJoke {
  return {
    icon_url: joke.icon_url,
    id: joke.id,
    url: joke.url,
    joke: joke.value
  }
}