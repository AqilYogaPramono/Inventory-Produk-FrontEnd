import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Produk() {
    const [produk, setProduk] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/produk')
        .then(res => res.data && setProduk(res.data.rows))
        .catch(err => console.error("Terjadi kesalahan saat mengambil data:", err));
    }, []);

    return (
        <div>
        <h2>Data Produk</h2>
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Gambar</th>
            </tr>
            </thead>
            <tbody>
            {produk.map((item) => (
                <tr key={item.produk_id}>
                <td>{item.produk_id}</td>
                <td>{item.nama_produk}</td>
                <td><img src={`http://localhost:3001/images/${item.gambar_produk}`} height="150" alt={item.nama_produk} /></td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default Produk;