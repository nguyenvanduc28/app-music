import config from '../config.js'
export default {
    async getTracks({commit}, sumTrack) {
        let reponse = await fetch(config.URL_API);
        let tracks = await reponse.json();
        commit('setTracks', tracks);
        commit('setSumTrack', sumTrack);
    },
    
    getCurrentTrack({commit}) {
        commit('setCurrentTrack');
    },

    nextId({commit}) {
        commit('setId', 1);
    },

    prevId({commit}) {
        commit('setId', -1);
    },

}