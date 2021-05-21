import { getMovie, getMovies, getSuggestions } from "./db";

const resolvers = {
	Query: {
		movies: (_, { rating, limit }) => getMovies(limit, rating),
		getMovie: (_, { id }) => getMovie(id),
		getSuggestions: (_, { id }) => getSuggestions(id),
	},
};

export default resolvers;
