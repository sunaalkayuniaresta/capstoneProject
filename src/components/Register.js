import React from "react";
import "../style.css";
import banner from "../../src/images/Rectangle.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-6">
          <div className="banner-img">
            <img src={banner} width="100%" alt="" />
          </div>
        </div>
        <div className="col-md-6 sm-12">
          <div className="flex-container">
            <div className="formulir">
              <h3 className="teks">Daftar</h3>
              <label className="label-info">
                Nama
                <input type="text" className="input-text" placeholder="Nama Lengkap" name="Nama" />
              </label>
              <label className="label-info">
                Email
                <input type="email" className="input-text" placeholder="Contoh: johndee@gmail.com" name="email" />
              </label>
              <label className="label-info">
                Password
                <input type="password" className="input-text" placeholder="Masukkan password" name="password" />
              </label>
              <button className="button-simpan">Daftar</button>
              <label className="text">
                <h6>
                  Sudah punya akun? <span style={{ color: "#7126B5" }}>Masuk di sini</span>
                </h6>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
