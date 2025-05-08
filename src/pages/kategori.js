import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Kategori() {
    const [kategori, setKategori] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/kategori')
        .then(res => res.data && setKategori(res.data.dataasli))
        .catch(err => console.error("Terjadi kesalahan saat mengambil data kategori:", err));
    }, []);

    return (
        <div>
        <h2>Data Kategori</h2>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nama Kategori</th>
            </tr>
            </thead>
            <tbody>
            {kategori.map((item) => (
                <tr key={item.kategori_id}>
                <td>{item.kategori_id}</td>
                <td>{item.nama_kategori}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default Kategori;