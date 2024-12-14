import React from 'react';

const AlbumActions = ({ albums, onEdit, onDelete }) => (
  <div>
    {albums.map(album => (
      <div key={album.id} className="album-item">
        <h3>{album.title}</h3>
        <button onClick={() => onEdit(album)}>Edit</button>
        <button onClick={() => onDelete(album.id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default AlbumActions;