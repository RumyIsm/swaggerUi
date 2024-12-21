import React, { useEffect, useState } from 'react';
import { BooksService } from '../services/books.service';
import './styles/Books.css'; 

const Books: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const booksService = new BooksService();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await booksService.getBooks();
        setBooks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await booksService.deleteBook(id);
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className='container_div'>
      <h2 className='header'>Books</h2>
      <div className="card-container">
        {books.map(book => (
          <div key={book.id} className="card">
            <h3>{book.id}</h3>
            <h3>Title: {book.title}</h3>
            <h4>Page count: {book.pageCount}</h4>
            <p>Description: {book.description}</p>
            
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
