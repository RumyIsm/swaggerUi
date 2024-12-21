import React, { useEffect, useState } from 'react';
import { AuthorsService } from '../services/authors.service';
import "../styles/Authors.css";

const Authors: React.FC = () => {
  const [authors, setAuthors] = useState<any[]>([]);

  const authorsService = new AuthorsService();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await authorsService.getAuthors();
        setAuthors(data);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };
    fetchAuthors();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await authorsService.deleteAuthor(id);
      setAuthors(authors.filter(author => author.id !== id));
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  return (
    <div className='container_div'>
      <h2 className='header'>Authors</h2>
      <div className="card-container">
        {authors.map(author => (
          <div key={author.id} className="card">
            <h3> {author.id} </h3>
            <h4>{author.firstName} </h4>
            <h4>  {author.lastName}</h4>
            <p>Book ID: {author.idBook}</p>
            <button onClick={() => handleDelete(author.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
