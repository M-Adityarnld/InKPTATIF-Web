import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const DetailTA = () => {
  const { state } = useLocation();
  const [activeButton, setActiveButton] = useState('bimbingan'); 

  
  const handleDibimbingClick = () => {
    setActiveButton('bimbingan');
  };

  
  const handleDiujiClick = () => {
    setActiveButton('seminar');
  };

  return (
    <>
      <div style={{ padding: '170px', marginLeft: '300px', width: '100%',height:'100%' }}>
        <div className='data-detail-mhs'>
          <div style={{ display: 'flex', alignItems: 'center', margin: '30px 0 0 30px' }}>
            <FontAwesomeIcon icon={faCircleUser} style={{ margin: '10px 15px 0 0', width: '50px', height: '50px' }} />
            <div style={{ marginLeft: '10px' }}>
              <div style={{ fontSize: '35px', color: '#023047', fontWeight: '500' }}>{state.mahasiswa.nama}</div>
              <div style={{ color: '#219EBC', fontSize: '20px', fontWeight: '500' }}>{state.mahasiswa.NIM}</div>
            </div>
          </div>

          <div className='dosen-pem' style={{ margin: '30px 0 0 30px', fontWeight: '600' }}>
            <div>Pembimbing I</div>
            <div>{state.mahasiswa.pembimbing1}</div>
          </div>

          <div className='dosen-pem' style={{ margin: '30px 0 0 30px', fontWeight: '600' }}>
            <div>Pembimbing 2</div>
            <div>{state.mahasiswa.pembimbing2}</div>
          </div>

          <div className='judul-detail' style={{ margin: '30px 0 0 30px', fontWeight: '600', fontSize: '20px' }}>
            <text style={{ color: '#219EBC' }}>Judul Seminar</text>
            <div>{state.mahasiswa.judul}</div>
          </div>

          <div className='hari-detail' style={{ margin: '30px 0 0 30px', fontWeight: '600', fontSize: '20px' }}>
            <text style={{ color: '#219EBC' }}>Pada</text>
            <div>{state.mahasiswa.hari}</div>
          </div>

          <div className='hari-detail' style={{ marginLeft: '30px', display: 'flex', fontSize: '20px', fontWeight: '600' }}>
            <div>{state.mahasiswa.jam}</div>
            <div>{state.mahasiswa.tempat}</div>
          </div>

          <div style={{ margin: '70px 0 0 100px' }}>
            <div className="mhs-action2">
              <button
                className="mhs-select"
                onClick={handleDibimbingClick}
                style={{ borderBottom: activeButton === 'bimbingan' ? '4px solid #023047' : '4px solid #219EBC' }}>Nilai Bimbingan</button>
              <button
                className="mhs-select"
                onClick={handleDiujiClick}
                style={{ borderBottom: activeButton === 'seminar' ? '4px solid #023047' : '4px solid #219EBC' }}>Nilai Seminar</button>
            </div>
          </div>

     
          <div className='nilai-input-TA' style={{ display: 'flex', margin: '30px 0 0 0', justifyContent: 'center' }}>
            Tanggung Jawab
            <input style={{ backgroundColor: '#219EBC', marginLeft: '200px' ,width:'50px',color:'#ffff',textAlign:'center'}} placeholder="" />
          </div>

          

          

          
        </div>
      </div>
    </>
  );
}

export default DetailTA;
