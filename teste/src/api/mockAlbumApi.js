import delay from './delay';

const albums= [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/92c952"
  },
  {
    "albumId": 2,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/771796"
  },
  {
    "albumId": 2,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "http://placehold.it/600/24f355",
    "thumbnailUrl": "http://placehold.it/150/24f355"
  },
  {
    "albumId": 3,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "http://placehold.it/600/d32776",
    "thumbnailUrl": "http://placehold.it/150/d32776"
  },
  {
    "albumId": 3,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "http://placehold.it/600/f66b97",
    "thumbnailUrl": "http://placehold.it/150/f66b97"
  },
  {
    "albumId": 4,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "http://placehold.it/600/56a8c2",
    "thumbnailUrl": "http://placehold.it/150/56a8c2"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (album) => {
  return replaceAll(album.title, ' ', '-');
};

class AlbumApi {
  static getAllAlbums() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], albums));
      }, delay);
    });
  }
}


export default AlbumApi;
