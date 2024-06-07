
import React, { useState } from 'react';
import libros from './libros';

const LibroList = () => {
  const [readBooks, setReadBooks] = useState([]);

  const toggleRead = (index) => {
    setReadBooks((prevReadBooks) =>
      prevReadBooks.includes(index)
        ? prevReadBooks.filter((i) => i !== index)
        : [...prevReadBooks, index]
    );
  };

  const totalBooks = libros.length;
  const readBooksCount = readBooks.length;
  const progressPercentage = (readBooksCount / totalBooks) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">100 Libros para ser más inteligente</h1>
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold">{readBooksCount}/{totalBooks} Leídos</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {libros.map((libro, index) => (
            <li
              key={index}
              className={`p-4 cursor-pointer flex justify-between items-center ${
                readBooks.includes(index)
                  ? 'line-through text-gray-500'
                  : 'text-gray-800 hover:bg-gray-50 transition duration-200'
              }`}
              onClick={() => toggleRead(index)}
            >
              <div>
                <span className="font-semibold">{libro.titulo}</span>
                <span className="text-gray-600"> - {libro.autor}</span>
              </div>
              {readBooks.includes(index) && (
                <span className="text-green-500 font-semibold">Leído</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibroList;
