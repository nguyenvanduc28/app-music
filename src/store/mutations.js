export default {
    setTracks(state, tracks) {
        state.tracks = tracks
    },

    setId(state, step) {
        let id = state.currentId;
        id = id + step;

        if (step == 1 && id > state.sumTrack) {
            id = 0
        }

        if (step == -1 && id == 0) {
            id = state.sumTrack
        }

        state.currentId = id;
    },

    setCurrentTrack(state) {
        state.currentTrack = state.tracks[state.currentId]
    },

    setVolume(state, volume) {
        state.volume = volume
    },

    setSumTrack(state, sumTrack) {
        state.sumTrack = sumTrack
    }

}