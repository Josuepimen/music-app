import React, { useState, } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface Artist {
  strArtist: string;
  strGenre: string;
  strBiographyEN: string;
  strArtistThumb: string;
  strCountry: string;
  intFormedYear: string;
}

const ArtistSearch = () => {
  const [query, setQuery] = useState('');
  const [artist, setArtist] = useState<Artist | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchArtist = async (name: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`https://theaudiodb.com/api/v1/json/2/search.php?s=${name}`);
      if (res.data.artists) {
        setArtist(res.data.artists[0]);
      } else {
        setArtist(null);
        setError('Artista no encontrado 💔');
      }
    } catch {
      setError('Error al buscar el artista 😢');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      fetchArtist(query.trim());
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-white">🔍 Buscar Artista</h1>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Ej: Twenty One Pilots"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 rounded-xl bg-white/90 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-all"
        >
          Buscar
        </button>
      </form>

      {loading && <p className="text-center text-gray-400">Cargando artista...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      {artist && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 md:flex gap-6"
        >
          <img
            src={artist.strArtistThumb}
            alt={artist.strArtist}
            className="w-full md:w-1/3 object-cover rounded-xl"
          />
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{artist.strArtist}</h2>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Género:</strong> {artist.strGenre || 'N/A'}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>País:</strong> {artist.strCountry || 'N/A'}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Desde:</strong> {artist.intFormedYear || 'N/A'}
            </p>
            <p className="text-gray-700 text-sm whitespace-pre-wrap">{artist.strBiographyEN}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ArtistSearch;
