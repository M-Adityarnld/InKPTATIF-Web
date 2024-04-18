import React, { useState } from 'react';
import {data2} from '../Data/index'

const DetailKP = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [nilai, setNilai] = useState({
    usaha: '',
    kreatifitas: '',
    tanggungJawab: '',
    komunikasi: '',
    motivasi: '',
    semangat: '',
    kreativ: '',
    tepatWaktu: '',
    tanggungJawabSeminar: ''
  });

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleChangeNilai = (e) => {
    const { name, value } = e.target;
    setNilai(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const renderNilaiForm = () => {
    if (selectedOption === 'bimbingan') {
      return (
        <div>
          <h2>Nilai Bimbingan</h2>
          <form>
            <label htmlFor="usaha">Usaha:</label>
            <input type="text" id="usaha" name="usaha" value={nilai.usaha} onChange={handleChangeNilai} /><br />

            <label htmlFor="kreatifitas">Kreatifitas:</label>
            <input type="text" id="kreatifitas" name="kreatifitas" value={nilai.kreatifitas} onChange={handleChangeNilai} /><br />

            <label htmlFor="tanggungJawab">Tanggung Jawab:</label>
            <input type="text" id="tanggungJawab" name="tanggungJawab" value={nilai.tanggungJawab} onChange={handleChangeNilai} /><br />

            <label htmlFor="komunikasi">Komunikasi:</label>
            <input type="text" id="komunikasi" name="komunikasi" value={nilai.komunikasi} onChange={handleChangeNilai} /><br />
          </form>
        </div>
      );
    } else if (selectedOption === 'seminar') {
      return (
        <div>
          <h2>Nilai Seminar</h2>
          <form>
            <label htmlFor="motivasi">Motivasi:</label>
            <input type="text" id="motivasi" name="motivasi" value={nilai.motivasi} onChange={handleChangeNilai} /><br />

            <label htmlFor="semangat">Semangat:</label>
            <input type="text" id="semangat" name="semangat" value={nilai.semangat} onChange={handleChangeNilai} /><br />

            <label htmlFor="kreativ">Kreativitas:</label>
            <input type="text" id="kreativ" name="kreativ" value={nilai.kreativ} onChange={handleChangeNilai} /><br />

            <label htmlFor="tepatWaktu">Tepat Waktu:</label>
            <input type="text" id="tepatWaktu" name="tepatWaktu" value={nilai.tepatWaktu} onChange={handleChangeNilai} /><br />

            <label htmlFor="tanggungJawabSeminar">Tanggung Jawab:</label>
            <input type="text" id="tanggungJawabSeminar" name="tanggungJawabSeminar" value={nilai.tanggungJawabSeminar} onChange={handleChangeNilai} /><br />
          </form>
        </div>
      );
    }
  };

  return (
    <div className='data-detailkp' style={{ display: 'flex', padding: '100px' }}>
      <div style={{ flex: 1 }}>
        {/* Informasi Mahasiswa */}
        <h2>Informasi Mahasiswa</h2>
        <ul>
          {data2.map((mahasiswa) => (
            <li key={mahasiswa.id}>
              <strong>Nama:</strong> {mahasiswa.nama}<br />
              <strong>NIM:</strong> {mahasiswa.NIM}<br />
              <strong>Status:</strong> {mahasiswa.Status}<br />
              <strong>Judul:</strong> {mahasiswa.judul}<br />
              <strong>Hari:</strong> {mahasiswa.hari}<br />
              <strong>Jam:</strong> {mahasiswa.jam}<br />
              <strong>Tempat:</strong> {mahasiswa.tempat}<br />
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        {/* Sisi kanan: Pilihan nilai */}
        <div>
          <h2>Pilih Jenis Nilai:</h2>
          <button onClick={() => handleOptionClick('bimbingan')}>Nilai Bimbingan</button>
          <button onClick={() => handleOptionClick('seminar')}>Nilai Seminar</button>
        </div>
        {/* Tampilkan formulir nilai sesuai pilihan */}
        {selectedOption && renderNilaiForm()}
      </div>
    </div>
  );
};

export default DetailKP;
