import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faEye, faEyeSlash, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import pictlogin from '../assets/pictlogin.png';
import { useState } from 'react';
import { datalogin } from '../Data/index';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const nip = e.target.elements.nip.value;
    const password = e.target.elements.password.value;

    const user = datalogin.find((u) => u.NIP === nip && u.Password === password);

    if (user) {
      navigate('/HomePage');
    } else {
      setError('Wrong NIP or Password, Please Try Again.');
    }
  };

  return (
    <div className="log-in">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1 style={{ fontWeight: 'bold', fontSize: '64px', marginBottom: '10px', textAlign: 'center' }}>
            <span style={{ color: '#023047' }}>InKPTA</span>
            <span style={{ color: '#219EBC' }}>TIF</span>
          </h1>
          <h5 style={{ fontSize: '18px', textAlign: 'center', marginBottom: '10px' }}>
            Aplikasi penginputan nilai untuk dosen pembimbing dan dosen penguji, khusus untuk Kerja Praktek dan Tugas Akhir
          </h5>
          <div className="input-box">
            <form label className="labellogin">NIP</form>
            <FontAwesomeIcon className="iconlogin" icon={faUser} />
            <input type="text" name="nip" placeholder="Masukkan NIP" required />
          </div>
          <div className="input-box">
            <form label className="labellogin">Password</form>
            <FontAwesomeIcon className="iconlogin" icon={faKey} />
            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Masukkan Password" required />
            <FontAwesomeIcon className="iconlogin eye-icon" icon={showPassword ? faEyeSlash : faEye} onClick={toggleShowPassword} />
          </div>
          <div className="remember-forgot">
            <input type="checkbox" />
            <label style={{ marginRight: '190px' }}>Remember Me</label>
            <Link className="lupa" to="/ForgotPW">
              Lupa Password?
            </Link>
          </div>
          {error && (
            <div className="error-container">
              <div className="error-message">
                <FontAwesomeIcon icon={faExclamationCircle} className="error-icon" />
                <span>{error}</span>
              </div>
            </div>
          )}
          <button className="submit" type="submit">
            Login
          </button>
        </form>
      </div>
      <div className="gambar1">
        <img src={pictlogin} alt="login-picture" style={{ width: '600px', height: 'auto', borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default LoginPage;