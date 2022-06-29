import React from "react";
import "./FormInfo.css";

export default function FormInfo() {
  return (
    <>
      <img className="back-arrow-2-3" src={require("../images/fi_arrow-left.png")} />
      <div className="form-2-3">
        <div className="cam-2-3">
          <img className="camera-2-3" src={require("../images/fi_camera.png")} />
        </div>
        <div className="formulir-2-3">
          <label className="label-info-2-3">
            Nama*
            <input type="text" className="input-text" name="Nama" />
          </label>
          <label className="label-info-2-3">
            Kota*
            <select className="input-text" aria-label="Default select example">
              <option selected>Pilih Kota</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </label>
          <label className="label-info-alamat-2-3">
            Alamat*
            <textarea className="input-text-2-3" class="form-control" rows="3" placeholder="Contoh: Jalan Ikan Hiu 33"></textarea>
          </label>
          <label className="label-info-2-3">
            No Handphone*
            <input type="text" className="input-text-2-3" name="Contoh: +628123456789" />
          </label>
          <button className="button-simpan-2-3">Simpan</button>
        </div>
      </div>
    </>
  );
}
