import React from "react";
import "./InfoProduk.css";

export default function InfoProduk() {
  return (
    <>
      <img className="back-arrow" src={require("../images/fi_arrow-left.png")} />
      <div className="infoproduk">
        <div className="formulir">
          <label className="label-info">
            Nama Produk
            <input type="text" className="input-text" placeholder="Nama" name="Nama" />
          </label>
          <label className="label-info">
            Harga Produk
            <input type="text" className="input-text" placeholder="Nama" name="Nama" />
          </label>
          <label className="label-info">
            Kategori
            <select className="input-text" aria-label="Default select example">
              <option selected>Pilih Kategori</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </label>
          <label className="label-info-alamat">
            Deskripsi
            <textarea className="input-text" class="form-control" rows="3" placeholder="Contoh: Jalan Ikan Hiu 33"></textarea>
          </label>
          <button className="button-simpan">Simpan</button>
        </div>
      </div>
    </>
  );
}
