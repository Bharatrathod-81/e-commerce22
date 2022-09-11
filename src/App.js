import './App.css';
import { Header } from './component/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='intro-content'>
        <img src='/images/Img1.png' alt='img' className='img1'/>

          <div className='intro1-container'>
            <div className='intro1-content1'>32000</div>
            <div className='intro1-content2'>kms</div>
            <p className='intro1-content3'>Highways & Expressway are being supervised and built in order to boost the country's economic development</p>
          </div>

          <div className='intro2-container'>
            <img src='/images/Img2.png' alt='img'className='img2'/>
            <p className='intro2-content1'>Experienced & Expert in Construction.</p>
          </div>

          <div className='intro3-container'>
            <i class="fa fa-dot-circle-o"></i>
            <i class="fa fa-circle-o"></i>
            <i class="fa fa-circle-o"></i>
            <i class="fa fa-circle-o"></i>
          </div>

          <div className='intro4-container'>
            <i class="fa fa-arrow-down" style={{fontSize:"24px"}}></i>
          </div>

          <div className='intro5-container'>
          </div>

      </div>
    </div>
  );
}

export default App;
