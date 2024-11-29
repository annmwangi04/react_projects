import { useState, useEffect } from 'react';

const SearchBooks = () => {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=subject:politics")
            .then((response) => response.json())
            .then((json) => {
                setBooks(json.items);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Political Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book) => (
                    <div key={book.id} className="mb-6 border rounded-lg overflow-hidden shadow-lg p-4">
                        {book.volumeInfo.imageLinks && (
                            <img
                                src={book.volumeInfo.imageLinks.smallThumbnail}
                                alt={book.volumeInfo.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <p className="mt-2"><strong>Title:</strong> {book.volumeInfo.title}</p>
                        {book.volumeInfo.authors && <p><strong>Authors:</strong> {book.volumeInfo.authors.join(', ')}</p>}
                        <p><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
                        <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
                        {book.volumeInfo.description && <p className="mt-2">{book.volumeInfo.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBooks;
