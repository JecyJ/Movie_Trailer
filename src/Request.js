const API_URL = "https://api.themoviedb.org/3/"

const requests = {
    requestTrending: `${API_URL}trending/movie/week?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`,
    requestUpcoming: `${API_URL}movie/upcoming?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`,
    requestToprated: `${API_URL}movie/top_rated?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`,
    requestSeries: `${API_URL}tv/top_rated?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`,
    searchMovies: `${API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}`,
    searchSeries: `${API_URL}/search/tv?api_key=${process.env.REACT_APP_API_KEY}`,
    searchMulti: `${API_URL}/search/multi?api_key=${process.env.REACT_APP_API_KEY}`
}

export default requests;