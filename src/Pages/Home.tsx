import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 

interface Artist {
  idArtist: string;
  strArtist: string;
  strGenre: string;
  strBiographyEN: string;
  strArtistLogo: string;
}


export default function Home() {
  const [artist, setArtist] = useState('');
const [artistData, setArtistData] = useState<Artist | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchArtist = async (artistName: string) => {
    if (!artistName) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artistName}`
      );
      const data = await response.json();
      if (data.artists) {
        setArtistData(data.artists[0]); 
      } else {
        setError('No se encontraron resultados para ese artista.');
      }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError('Hubo un error al buscar el artista.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchArtist(artist);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
      <h1 className="text-4xl font-semibold text-center mb-6">Busca tu Artista</h1>
      
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Nombre del artista"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="p-3 rounded-md text-black w-1/3"
        />
        <button
          type="submit"
          className="ml-2 p-3 bg-[#00aaff] text-white rounded-md flex items-center justify-center"
        >
          <FaSearch />
        </button>
      </form>

      {loading && <p className="text-center">Cargando...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {artistData && !loading && !error && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{artistData.strArtist}</h2>
          <img
            src={artistData.strArtistLogo}
            alt={artistData.strArtist}
            className="mx-auto mb-4 w-32 h-32 object-cover"
          />
          <p className="text-sm mb-2">{artistData.strGenre}</p>
          <p className="text-sm">{artistData.strBiographyEN?.substring(0, 200)}...</p>
        </div>
      )}
    </div>
  );
}
