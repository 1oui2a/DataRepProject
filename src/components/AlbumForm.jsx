import React, { useState, useEffect } from 'react';

const AlbumForm = ({ album, onSave }) => {
  const [title, setTitle] = useState(album ? album.title : '');

  useEffect(() => {
    if (album) {
      setTitle(album.title);
    }
  }, [album]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...album, title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Album Title"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AlbumForm;