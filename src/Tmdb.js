/* eslint-disable import/no-anonymous-default-export */
const API_kEY = '2de9b6414d1ded8a0bcbadfd9043f8cf';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
               slug: 'originals',
               title: 'Originais da netflix',
               items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_kEY}`)
            },
            {
               slug: 'trending',
               title: 'Recomendados para você',
               items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_kEY}`)
            },
            { 
               slug: 'top rated',
               title: 'Em alta',
               items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_kEY}`)
            },
            {
               slug: 'action',
               title: 'Ação',
               items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_kEY}`)
            },
            {
               slug: 'comedy',
               title: 'Comédia',
               items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_kEY}`)
            },
          {
               slug: 'horror',
               title: 'Terror',
               items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_kEY}`)
          },

            {
               slug: 'Romance',
               title: 'Romance',
               items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_kEY}`)
            },
          {
               slug: 'Documentary',
               title: 'Documentario',
               items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_kEY}`)
          },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

            if(movieId) {
                switch(type) {
                    case 'movie':
                        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_kEY}`);
                    break;
                    case 'tv':
                        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_kEY}`);
                    break;
                    default:
                        info = null;
                    break;
                }
            }
        return info;
    }
}