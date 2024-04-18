import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { datamhs, datamp } from '../Data/index';

const DetailTA = () => {
  const location = useLocation();
  const [studentData, setStudentData] = useState(null);
  const [activeTab, setActiveTab] = useState('bimbingan');

  useEffect(() => {
    if (location && location.state && location.state.id) {
      const { id, dataType } = location.state;
      let student = null;
      if (dataType === 'dibimbing') {
        student = datamhs.find((s) => s.id === id);
      } else if (dataType === 'diuji') {
        student = datamp.find((s) => s.id === id);
      }
      setStudentData(student);
    } else {
      setStudentData(null);
    }
  }, [location.state]);

  useEffect(() => {
    // Lakukan sesuatu setiap kali activeTab berubah
  }, [activeTab]);

  const handleClickTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ padding: '100px', display: 'flex' }}>
      <div className="icon-detail">
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </div>
      <div className="detail-container">
        <div className="data-detail">
          <h2>Informasi Mahasiswa</h2>
          {studentData ? (
            <>
              <div className="mhs-icon">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  style={{ height: '40px', width: '40px', marginTop: '10px' }}
                />
                <div className="mhs-self">
                  <h3 style={{ color: '#023047', fontSize: '20px' }}>
                    {studentData.nama}
                  </h3>
                  <p style={{ color: '#219EBC', fontSize: '15px' }}>
                    {studentData.NIM}
                  </p>
                </div>
              </div>
              <p>Keterangan: {studentData.Keterangan}</p>
              <p>Judul TA: {studentData.judul}</p>
              <p>Hari: {studentData.hari}</p>
              <p>Jam: {studentData.jam}</p>
              <p>Tempat: {studentData.tempat}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <div className="tab">
            <button
              className={activeTab === 'bimbingan' ? 'active' : ''}
              onClick={() => handleClickTab('bimbingan')}
            >
              Nilai Bimbingan
            </button>
            <button
              className={activeTab === 'seminar' ? 'active' : ''}
              onClick={() => handleClickTab('seminar')}
            >
              Nilai Seminar
            </button>
          </div>
          <div className="kolom-penilaian">
            {activeTab === 'bimbingan' ? (
              <div>
                <h3>Penilaian Bimbingan</h3>
                <input type="number" placeholder="Usaha" />
                <input type="number" placeholder="Kreativitas" />
                <input type="number" placeholder="Tanggung Jawab" />
                <input type="number" placeholder="Komunikasi" />
                <input type="number" placeholder="Jujur" />
              </div>
            ) : (
              <div>
                <h3>Penilaian Seminar</h3>
                <input type="number" placeholder="Motivasi" />
                <input type="number" placeholder="Keuletan" />
                <input type="number" placeholder="Kreativitas" />
                <input type="number" placeholder="Tepat Waktu" />
                <input type="number" placeholder="Tanggung Jawab" />
              </div>
            )}
          </div>
          <div className="button-container">
            <button className="simpan">Simpan</button>
            <button className="edit">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTA;