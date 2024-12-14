import React from 'react';

const AlbumList = ({ albums }) => (
  <div>
    {albums.map(album => (
      <div key={album.id} className="album-item">
        <h3>{album.title}</h3>
      </div>
    ))}
  </div>
);

export default AlbumList;