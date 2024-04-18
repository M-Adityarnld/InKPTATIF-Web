import pictlogin from '../assets/pictlogin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'


function ForgotPW() {
    return(
        <div className='log-in'>
         <div className='wrapper'>
             <h1 style={{fontWeight:'bold', fontSize:'64px', marginBottom:'10px', textAlign:'center'}}>
             <span style={{ color: '#023047' }}>InKPTA</span>
                   <span style={{ color: '#219EBC' }}>TIF</span>
               </h1>
       <div className='bantuan'>
       <FontAwesomeIcon icon={faMessage} style={{width:'50px', height:'50px', padding:'20px'}} />
        <ul style={{borderColor:'#219EBC', borderStyle:'solid',borderRadius:'10px'}}>Lupa Password? Silahkan pergi ke Admin Teknik Informatika UIN Suska Riau</ul>
  </div>
  
  <Link  to='/LoginPage'>   
  <button className='submit' type='submit'>Back</button>
  </Link>
 
  </div>

<div className='gambar1'>
<img src={pictlogin} alt='login-picture'style={{width : '600px',height:'auto', borderRadius:'8px'}}/>
</div>

  </div>
  )
}

export default ForgotPW
