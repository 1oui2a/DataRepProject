import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Footer from './components/footer';
import Header from './components/header';
import AlbumList from './components/albumlist';
import AlbumForm from './components/AlbumForm';
import AlbumActions from './components/AlbumActions';

function App() {
  const [albums, setAlbums] = useState([
    { id: 1, title: 'Album 1' },
    { id: 2, title: 'Album 2' },
    { id: 3, title: 'Album 3' },
  ]);
  const [currentAlbum, setCurrentAlbum] = useState(null);

  const handleSaveAlbum = (album) => {
    if (album.id) {
      setAlbums(albums.map(a => (a.id === album.id ? album : a)));
    } else {
      album.id = Date.now();
      setAlbums([...albums, album]);
    }
    setCurrentAlbum(null);
  };

  const handleEditAlbum = (album) => {
    setCurrentAlbum(album);
  };

  const handleDeleteAlbum = (id) => {
    setAlbums(albums.filter(album => album.id !== id));
  };

  return (
    <Router>
      <Header />
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Album List</Link></li>
          <li><Link to="/create-edit">Create/Edit Album</Link></li>
          <li><Link to="/other">Other Content</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AlbumList albums={albums} />} />
        <Route path="/create-edit" element={
          <>
            <AlbumForm album={currentAlbum} onSave={handleSaveAlbum} />
            <AlbumActions albums={albums} onEdit={handleEditAlbum} onDelete={handleDeleteAlbum} />
          </>
        } />
        <Route path="/other" element={<div>Other content goes here</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;