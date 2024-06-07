import React, { useState, useEffect } from 'react';
import libros from './libros';
import { FiCheckCircle, FiSearch, FiBookOpen, FiBook, FiTrash2 } from 'react-icons/fi';

const LibroList = () => {
  const [readBooks, setReadBooks] = useState(() => {
    const saved = localStorage.getItem('readBooks');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [confirmToggle, setConfirmToggle] = useState(null);

  useEffect(() => {
    localStorage.setItem('readBooks', JSON.stringify(readBooks));
  }, [readBooks]);

  const toggleRead = (index) => {
    setReadBooks((prevReadBooks) =>
      prevReadBooks.includes(index)
        ? prevReadBooks.filter((i) => i !== index)
        : [...prevReadBooks, index]
    );
    setConfirmToggle(null);
  };

  const totalBooks = libros.length;
  const readBooksCount = readBooks.length;
  const progressPercentage = (readBooksCount / totalBooks) * 100;

  const filteredBooks = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    libro.autor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="flex items-center mb-6">
        <FiBookOpen className="text-5xl text-green-500 mr-2" />
        <h1 className="text-4xl font-bold text-gray-900">100 Libros para ser más inteligente</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold flex items-center">
              <FiBook className="text-2xl mr-1" />
              {readBooksCount}/{totalBooks} Leídos
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-green-500 h-4 rounded-full transition-width duration-500 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar libros..."
              className="w-full p-2 pl-10 mb-4 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {filteredBooks.map((libro, index) => (
            <li
              key={index}
              className={`p-4 cursor-pointer flex justify-between items-center transition duration-300 ease-in-out transform hover:scale-105 ${
                readBooks.includes(index)
                  ? 'line-through text-gray-500 bg-gray-50'
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setConfirmToggle(index)}
            >
              <div className="flex items-center">
                {readBooks.includes(index) ? (
                  <FiCheckCircle className="text-green-500 mr-2" />
                ) : (
                  <FiBook className="text-gray-400 mr-2" />
                )}
                <div>
                  <span className="font-semibold">{libro.titulo}</span>
                  <span className="text-gray-600"> - {libro.autor}</span>
                </div>
              </div>
              {readBooks.includes(index) && (
                <FiTrash2 className="text-red-500" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {confirmToggle !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Confirmar</h2>
            <p className="mb-4">¿Estás seguro de que quieres marcar este libro como leído/no leído?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-200 px-4 py-2 rounded"
                onClick={() => setConfirmToggle(null)}
              >
                Cancelar
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => toggleRead(confirmToggle)}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
      <footer className="mt-8">
        <p className="text-gray-600">by Luis Alcides</p>
      </footer>
    </div>
  );
};

export default LibroList;

