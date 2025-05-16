import React, { useState } from 'react';
import axios from 'axios';

export const APIData = () => {
    const [authors, setAuthors] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get('https://picsum.photos/v2/list');
            const authorNames = response.data.map(item => item.author); // Extract all authors
            setAuthors(authorNames);
           
        } catch (error) {
            console.error("Error fetching data:", error);
            setAuthors(["Error fetching data"]);
        }
    };

    return (
        <>
            <div id='FetchData'>
                {authors.map((author, index) => (
                    <p key={index}>{author}</p>
                ))}
            </div>
            <button onClick={getData}>Get Data</button>
        </>
    );
};
