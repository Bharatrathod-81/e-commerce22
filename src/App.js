import './App.css';
import { Header } from './component/header/header';

function App() {

  const introDetails =
    [
      {
        number: "18+",
        text: "Years Experience",
        icons: "fa-certificate"
      },
      {
        number: "1000+",
        text: "Employees",
        icons: "fa-user-o"
      },
      {
        number: "205+",
        text: "Projects",
        icons: "fa-folder-open-o"
      },
      {
        number: "81",
        text: "Indian State Presence",
        icons: "fa-gear"
      },
      {
        number: "32",
        text: "Length of Highways",
        icons: "fa-line-chart"
      },
      {
        number: "1460",
        text: "Million Revence",
        icons: "fa-industry"
      },
      {
        number: "146",
        text: "Crores Turnover in 2020",
        icons: "fa-industry"
      }
    ];

  const allProjectsDatails =
    [
      {
        company: "Independent Engineering",
        price: "",
        name: "Ranchi Ring Road",
        lane: "6 Lane Highway",
        length: "36.192 Km & Service Road Length",
        type: "3 Nos Major Bridges"
      },
      {
        company: "Independent Engineering",
        price: "",
        name: "AE-Nagpur-Mumbai CP-12",
        lane: "4 Lane Highway",
        length: "67.76 Km Project Length",
        type: "* Nos Major Bridges"
      },
      {
        company: "Independent Engineering",
        price: "",
        name: "IE-Vadodara KIM Expressway",
        lane: "17 Km Project Length",
        length: "3 Km Over Bridge",
        type: "120 m Longest Span"
      },
      {
        company: "Detailed Project Report",
        price: "",
        name: "Purvanchal Expressway",
        lane: "208.72 Km Project Length",
        length: "Hilly Terrain",
        type: "3 Nos Total Packages"
      },
      {
        company: "Independent Engineering",
        name: "The Amritsar-Jamngar Expressway",
        price: "477.00 Cr",
        lane: "6 Lane Highway",
        length: "67 Km Project Length",
        type: "5 Major Bridges"
      },
      {
        company: "Independent Engineering",
        name: "Mukarba Chowk - Panipat of NH-1",
        price: "2128.72 Cr",
        lane: "8 Lane Highway",
        length: "69.849 Km Project Length",
        type: "BOTBToll Model"
      },
    ]
  return (
    <div className="App">
      <Header />
      <div className='intro-content '>
        <img src='/images/Img1.png' alt='img' className='img1' />

        <div className='intro1-container'>
          <div className='intro1-content1'>32000</div>
          <div className='intro1-content2'>kms</div>
          <p className='intro1-content3'>Highways & Expressway are being supervised and built in order to boost the country's economic development</p>
        </div>

        <div className='intro2-container'>
          <img src='/images/Img2.png' alt='img' className='img2' />
          <p className='intro2-content1'>Experienced & Expert in Construction.</p>
        </div>

        <div className='intro3-container'>
          <i class="fa fa-dot-circle-o"></i>
          <i class="fa fa-circle-o"></i>
          <i class="fa fa-circle-o"></i>
          <i class="fa fa-circle-o"></i>
        </div>

        <div className='intro4-container'>
          <i class="fa fa-arrow-down" style={{ fontSize: "24px" }}></i>
        </div>

        <div className='intro5-container'>
        </div>
      </div>

      <div className='intro-content2'>
        <p className='intro-content2_heading'>SA Infrastructure Consultants</p>
        <div className='intro-content2_para'>A firm of designers, engineers, architects, planners,
          consultants, and technical specialists,
          working hand in hand across every aspect of today's built environment. We coordinates
          consulting, supervision and Design Engineering for the most difficult environments,
          linking people and economies via highways, bridges, tunnels, and</div>
        <p className='text_about_company'>About Company <i class="fa fa-external-link"></i></p>

        <div className='intro_details'>
          {introDetails.map(e =>
            <>
              <hr></hr>
              <div className='details_data'>
                <div className='data_counting'>
                  <div className='dash1'>------------------------------------------</div>
                  <i class={`fa ${e.icons}`}></i>
                  <span className='details_number'>{e.number}</span>
                </div>
                <p className="details_text">{e.text}</p>
              </div>
            </>
          )}
          <hr></hr>
        </div>
      </div>
      <div className='location_details'>
        <div className='locations_container'>
          <p className='location_year'>2003</p>
          <p className='location1'>
            Proprietary Firm in the name of“Infrastructure
            Engineers and Consultants"</p>
          <p className='location2'>First IE Project – Mumbai Pune Expressway
            of old NH-4</p>
          <p className='location3'>First DPR of Darbhanga – Jhanjharpur in Bihar</p>
        </div>
      </div>
      <div className='result_details_container'>
        <div className='result_details'>
          <p className='explore_projects'>Explore the Projects</p>
          <p className='achive_results'>To achieve disruptive results</p>
          <p className='highways_letter'>HIGHWAYS</p>
          <p className='result_para'>The national and state highways,
            as well as urban and rural roads,
            make up India's overall road network
            of 6.4 million kilometres. National
            highways make up 2% of the overall
            road network yet transport 40% of all
            traffic.</p>
          <p className='explore_casestudy'>Explore Casestudy <i class="fa fa-external-link"></i></p>
        </div>
        <div className='result_img'>
        </div>
      </div>
      <div className='all_projects'>
        <div className='all'>All</div>
        <div className='highways'>Highways</div>
        <div className='bridges'>Bridges</div>
        <p className='more_projects'>More Projects <i class="fa fa-external-link"></i></p>
        <div className='projects_imgs'>
          {allProjectsDatails.map(e =>
            <div>
              <div className='project_card' key={e.length}>
                <img src='/images/Img3.png' alt='img' className='card_img' />
                <p className='company_name'>{e.company}</p>
                <p className='project_name'>{e.name}</p>
                <p className='lane'>{e.lane}</p>
                <p className='length'>{e.length}</p>
                <p className='type'>{e.type}</p>
              </div>
            </div>
          )}
        </div>
        <div className='core_strength'>
          <p className='core_strength_text'>Core Strength</p>
          <p className='core_strength_text1'>Specialized Bridge Design and Construction</p>
          <div className='core_strength_container'>
            <div>
              <div className='core_card'>
                <div className='core_img1'></div>
                <div className='core_heading'>Construction Supervision</div>
                <p className='core_para'>
                  This forms a part of the total
                  package of most large industrial
                  projects that SAICPL executes.
                  The company has been involved
                  in the construction supervision
                  of more than 55 projects involving
                  roads and bridges.
                </p>
                <div className='core_learn_more'>Learn More <i class="fa fa-external-link"></i></div>
              </div>
            </div>
            <div>
              <div className='core_card'>
                <div className='core_img2'></div>
                <div className='core_heading'>independent consultancy</div>
                <p className='core_para'>
                  In India, the PPP format of roads
                  projects are generally based on
                  Model Concession Agreement and
                  there is role of an Independent
                  Consulatnant jointly appointed by
                  the Authority and the Concessionaire.
                </p>
                <div className='core_learn_more'>Learn More <i class="fa fa-external-link"></i></div>
              </div>
            </div>
            <div>
              <div className='core_card'>
                <div className='core_img3'></div>
                <div className='core_heading'>independent consultancy</div>
                <p className='core_para'>
                  In India, the PPP format of roads
                  projects are generally based on
                  Model Concession Agreement and
                  there is role of an Independent
                  Consulatnant jointly appointed
                  by the Authority and the
                  Concessionaire.
                </p>
                <div className='core_learn_more'>Learn More <i class="fa fa-external-link"></i></div>
              </div>
            </div>
          </div>

          <div className='core_icons'>
            <i class="fa fa-dot-circle-o"></i>
            <i class="fa fa-circle-o"></i>
            <i class="fa fa-circle-o"></i>
            <i class="fa fa-circle-o"></i>
          </div>
        </div>
      </div>
      <div className='all_employes'>
        <div className='all_employes_heading'>Expert Team</div>
        <p className='all_employes_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className='all_empolye_card'>
          <div className='director empolye_card'>
            <img src='/images/Img4.png' alt='img' className='employe_img' />
            <p className='employe_name'>Saurav Shekhar</p>
            <p className='position'>Director</p>
            <div className='social_media'>
              <i class="fa fa-twitter" style={{fontSize:"24px"}}></i>
              <i class="fa fa-facebook-f" style={{fontSize:"24px"}}></i>
              <i class="fa fa-linkedin" style={{fontSize:"24px"}}></i>
            </div>
          </div>
          <div className='executive_director empolye_card'>
            <img src='/images/Img4.png' alt='img' className='employe_img' />
            <p className='employe_name'>Sanjay Shukla</p>
            <p className='position'>Executive Director</p>
            <div className='social_media'>
              <i class="fa fa-twitter" style={{fontSize:"24px"}}></i>
              <i class="fa fa-facebook-f" style={{fontSize:"24px"}}></i>
              <i class="fa fa-linkedin" style={{fontSize:"24px"}}></i> 
            </div>
          </div>
          <div className='cfo empolye_card'>
            <img src='/images/Img4.png' alt='img' className='employe_img' />
            <p className='employe_name'>Mahesh Ramnath</p>
            <p className='position'>CFO</p>
            <div className='social_media'>
              <i class="fa fa-twitter" style={{fontSize:"24px"}}></i>
              <i class="fa fa-facebook-f" style={{fontSize:"24px"}}></i>
              <i class="fa fa-linkedin" style={{fontSize:"24px"}}></i>
            </div>
          </div>
          <div className='vice_president empolye_card'>
            <img src='/images/Img4.png' alt='img' className='employe_img' />
            <p className='employe_name'>Tushar Dhar</p>
            <p className='position'>Vice President</p>
            <div className='social_media'>
              <i class="fa fa-twitter" style={{fontSize:"24px"}}></i>
              <i class="fa fa-facebook-f" style={{fontSize:"24px"}}></i>
              <i class="fa fa-linkedin" style={{fontSize:"24px"}}></i>
            </div>
          </div>
          <div className='chief_general_manager empolye_card'>
            <img src='/images/Img4.png' alt='img' className='employe_img' />
            <p className='employe_name'>Vinay Krishna</p>
            <p className='position'>Chief General Manager</p>
            <div className='social_media'>
              <i class="fa fa-twitter" style={{fontSize:"24px"}}></i>
              <i class="fa fa-facebook-f" style={{fontSize:"24px"}}></i>
              <i class="fa fa-linkedin" style={{fontSize:"24px"}}></i>
            </div>
          </div>
        </div>
      </div>
      <div className='contact1'>
        Contact Us Today!
      </div>
      <div className='trusted_brands'>

      </div>
    </div>
  );
}

export default App;
