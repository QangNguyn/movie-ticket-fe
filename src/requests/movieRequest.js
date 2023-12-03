import instance from "../utils/http";

const movieRequest = {
  getMovieNowPlaying: async function () {
    let response = await instance.get("/movies/now-playing");
    return response.data;
  },
  getDetail: async function (slug) {
    let response = await instance.get("/movies/"+slug);
    return response.data;
  },
  getMovieByCategory: async function(id) {
    let response = await instance.get("/movies/category/" + id);
    return response.data;
  }
};
export default movieRequest;