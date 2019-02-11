import * as actionsType from '../actionsType'
import paginate from 'paginate-array';

const INITIAL_STATE = {
    numAlbuns: 1,
    albuns: [],
    sizePage: 10,
    page: 1,
    currentPage: null,
    albumId:null,
    photos: []
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case actionsType.GET_ALBUNS:

            const albuns = action.payload.data || []
            const { numAlbuns } = action.payload
            const currentPage = paginate(numAlbuns, state.page, state.sizePage)
            return {
                ...state,
                numAlbuns,
                albuns: albuns,
                currentPage,
            }
        case actionsType.CHANGE_SIZE_PAGE:
            const { newSizePage, newPage } = action.payload
            const newCurrentPage = paginate(state.numAlbuns, newPage, newSizePage)
            return {
                ...state,
                sizePage: newSizePage,
                page: newPage,
                currentPage: newCurrentPage
            }

        case actionsType.BACK_PAGE: {
            const newPage = action.payload
            const newCurrentPage = paginate(state.numAlbuns, newPage, state.sizePage)
            return {
                ...state,
                page: newPage,
                currentPage: newCurrentPage
            }
        }

        case actionsType.NEXT_PAGE: {
            const newPage = action.payload
            const newCurrentPage = paginate(state.numAlbuns, newPage, state.sizePage)
            return {
                ...state,
                page: newPage,
                currentPage: newCurrentPage
            }
        }

       
    //  Photos
        case actionsType.GET_PHOTOS: {
            const albumId = action.payload
            const photos = state.albuns.filter(album => album.albumId === albumId)
            return {
                ...state,
                albumId,    
                photos
            }
        }
        default: {
            return state
        }
    }
}