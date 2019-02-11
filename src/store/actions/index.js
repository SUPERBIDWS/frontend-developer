import axios from 'axios'
import * as actionsType from '../actionsType'

const URL = 'https://jsonplaceholder.typicode.com/photos'

function sucess(response, type) {
    return {
        type: type,
        payload: response
    }
}
function error(err, type) {
    return {
        type: type,
        payload: err
    }
}

export const getAlbuns = () => {
    return function (dispatch) {
        axios.get(URL)
            .then(response => {
                const albumId = []
                let numAlbuns = []
                const data = response.data
                data.forEach(element => {
                    albumId.push(element.albumId)
                });
                numAlbuns = albumId.filter((e, index) => {
                    return albumId.indexOf(e) === index
                })

                response.numAlbuns = numAlbuns

                dispatch(sucess(response, actionsType.GET_ALBUNS))
            })
            .catch(err => {
                dispatch(error(err, actionsType.GET_ALBUNS))
            })
    }
}

export const changeSizePage = e => {
    const { value } = e.target;

    const newSizePage = +value;
    const newPage = 1;
    return {
        type: actionsType.CHANGE_SIZE_PAGE,
        payload: {
            newSizePage,
            newPage,
        }
    }

}

export const backPage = page => {
    if (page > 1) {
        const newPage = page - 1
        return {
            type: actionsType.BACK_PAGE,
            payload: newPage
        }
    }
}

export const nextPage = (page, currentPage) => {
    if (page < currentPage.totalPages) {
        const newPage = page + 1;

        return {
            type: actionsType.NEXT_PAGE,
            payload: newPage
        }
    }
}


// Photos

export const getPhotos = albumId => {
    return {
        type:actionsType.GET_PHOTOS,
        payload:albumId
    }

}

export const cleanAlbumAndPhotos = id => {
    return {
        type: actionsType.CLEAN_ALBUM_PHOTOS,
        payload: []
    }

}

