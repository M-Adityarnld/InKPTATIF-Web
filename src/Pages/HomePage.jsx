
import { Container, Row, Col } from 'react-bootstrap';
import homepict from '../assets/homepict.png';
import Card from 'react-bootstrap/Card';
import { datamhs, datamp } from '../Data/index';

const HomePage = () => {
  return (
    <div className="home-container" style={{ padding: '100px' }}>
      <Container>
        <Row >
          <Col >
            <div className="header-home">
              <h1 style={{fontSize:'64px'}}>Assalamu'alaikum, <br /> <span style={{color:'#219EBC'}}>Bu Fulanah</span> </h1>
              <p>InKPTA<span style={{color:'#219EBC'}}>TIF</span> adalah tempat dimana bapak ibu melakukan pengisian nilai
              <br />mahasiswa Kerja Praktik dan Tugas Akhir
              </p>
            </div>
          </Col>
          <Col >
            <div>
              <img src={homepict} alt="Welcome" className="img-fluid" />
            </div>
          </Col>
          
      <Row>
        <h2 className="h2-home" style={{marginTop:'100px', borderBottom:'2px solid black',width:'480px'}}>History Penilain KP, Bu Fulanah</h2>
        <div className='card-home'style={{display:'flex', flexWrap:'wrap', position:'relative'}}>
          {datamhs.map(mahasiswa => (
            <Col key={mahasiswa.id}>
              <Card style={{ width: '15rem', margin: '20px ' ,height:'250px', borderColor:'#219EBC'}}>
                <Card.Body style={{padding:'0px'}} >
                  <Card.Title style={{fontSize:'15px', color:'#219EBC'}}>{mahasiswa.NIM} </Card.Title>
                  <Card.Title style={{height:'100px', fontSize:'15px'}}>{mahasiswa.nama}</Card.Title>
                  <Card.Text >
                    <div style={{ backgroundColor: '#023047', color: 'white', marginTop:'30px'}}>
                      <p style={{fontSize:'15px'}}>{mahasiswa.judul2}</p>
                     <div className='waktu-card'>
                      <p>{mahasiswa.hari}</p>
                      <p>{mahasiswa.jam}</p>
                      <p>{mahasiswa.tempat}</p>
                      
                      </div> 
                    </div>
                    
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </div>
          </Row>

          <Row>
        <h2 classname="h2-home" style={{marginTop:'100px', borderBottom:'2px solid black',width:'480px'}}>History Penilain TA, Bu Fulanah</h2>
        <div className='card-home'style={{display:'flex', flexWrap:'wrap', position:'relative'}}>
          {datamp.map(mahasiswa => (
            <Col key={mahasiswa.id} >
              <Card style={{ width: '15rem', margin: '20px' ,height:'250px', borderColor:'#219EBC'}}>
                <Card.Body style={{padding:'0px'}} >
                  <Card.Title style={{fontSize:'15px', color:'#219EBC'}}>{mahasiswa.NIM} </Card.Title>
                  <Card.Title style={{height:'100px', fontSize:'15px'}}>{mahasiswa.nama}</Card.Title>
                  <Card.Text >
                    <div style={{ backgroundColor: '#023047', color: 'white' , marginTop:'30px'}}>
                      <p style={{fontSize:'15px'}}>{mahasiswa.judul2}</p>
                     <div className='waktu-card'>
                      <p>{mahasiswa.hari}</p>
                      <p>{mahasiswa.jam}</p>
                      <p>{mahasiswa.tempat}</p>
                      
                      </div> 
                    </div>
                    
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </div>
          </Row>


          
        </Row>
  
      </Container>
    </div>
  );
};

export default HomePage;
