interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}

const album1 = make_album('Artist 1', 'Album One', 12);
const album2 = make_album('Artist 2', 'Album Two');
const album3 = make_album('Artist 3', 'Album Three', 15);

console.log(album1);
console.log(album2);
console.log(album3);
