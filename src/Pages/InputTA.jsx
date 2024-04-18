import React, { useState } from 'react';
import { datamhs, datamp } from '../Data/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const InputTA = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeButton, setActiveButton] = useState('dibimbing'); 
  const [dataToShow, setDataToShow] = useState(datamhs); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDibimbingClick = () => {
    setDataToShow(datamhs);
    setActiveButton('dibimbing'); 
  };

  const handleDiujiClick = () => {
    setDataToShow(datamp);
    setActiveButton('diuji'); 
  };

  const filteredData = dataToShow.filter((mahasiswa) =>
    mahasiswa.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mhs-container">
      <div className="mhs-title">
        <h1 style={{ fontSize: '48px' }}>
          <span style={{ color: '#023047' }}>Daftar Mahasiswa </span>
          <span style={{ color: '#219EBC' }}>Seminar Tugas Akhir</span>
        </h1>
      </div>
      <div className="mhs-action">
        <button
          className="mhs-select"
          onClick={handleDibimbingClick}
          style={{ borderBottom: activeButton === 'dibimbing' ? '4px solid #023047' : '4px solid #219EBC' }}>Yang dibimbing</button><button
          className="mhs-select"
          onClick={handleDiujiClick}
          style={{ borderBottom: activeButton === 'diuji' ? '4px solid #023047' : '4px solid #219EBC' }}>Yang diuji</button>
      </div>
      <div className="mhs-search">
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ position: 'absolute', marginLeft:'10px',marginTop:'12px'}} />
        <input
          type="text"
          placeholder="Cari Nama Mahasiswa..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{paddingLeft:'35px'}}
        />
      </div>
      {filteredData.map((mahasiswa) => (
        <div className="mhs-card" key={mahasiswa.id}>
          <div className="mhs-info">
            <div className="mhs-icon">
              <FontAwesomeIcon
                icon={faCircleUser}
                style={{ height: '40px', width: '40px', marginTop: '10px' }}
              />
              <div className="mhs-self">
                <h3 style={{ color: '#023047', fontSize: '20px' }}>{mahasiswa.nama}</h3>
                <p style={{ color: '#219EBC', fontSize: '15px' }}>{mahasiswa.NIM}</p>
              </div>
            </div>
            <div className="mhs-button">
              <button style={{ margin: '0 30px 0 70px', backgroundColor: '#00BD13' }}>Sudah</button>
              <Link to='/DetailTA'>
              <button style={{ backgroundColor: '#023047' }}>Detail</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InputTA;
