import React from 'react'
import cplc from '../images/demo-image-01.jpg'
import city from '../images/cityhope.jpg'
import vision from '../images/vision.jpg'
import hd from '../images/h&d.jpg'
import repair from '../images/repair.jpg'
import sales from '../images/sales.jpg'


const Portfolio = () => {
    return (
      
    <section className="portBody">

        <h1 className="portTitle">Recent Projects</h1>

    <div className="py-5" id="projects">

        <div className="row no-gutters projects">
          {/* DEMO 3 Item*/}
          <div className="col-lg-4">
            <a href="https://www.crosspointelife.org">
              <div className="hover hover-3 text-white rounded"><img src={cplc} alt="Crosspointe" />
                <div className="hover-overlay" />
                <div className="hover-3-content px-5 py-4">
                  <h3 className="hover-3-title text-uppercase font-weight-bold mb-1"><span className="font-weight-light">Crosspointe</span> Life</h3>
                  <p className="hover-3-description small text-uppercase mb-0">Connecting people to their PURPOSE, <br />impacting communities with HOPE.</p>
                </div>
              </div>
            </a>
          </div> 
          {/* DEMO 3 Item    */}
          <div className="col-lg-4">
            <a href="https://www.cityhopenow.org">
              <div className="hover hover-3 text-white rounded"><img src={city} alt="" />
                <div className="hover-overlay" />
                <div className="hover-3-content px-5 py-4">
                  <h3 className="hover-3-title text-uppercase font-weight-bold mb-1"><span className="font-weight-light">City </span>Hope</h3>
                  <p className="hover-3-description small text-uppercase mb-0">Unlocking hope, resources and support <br />when they are most needed.</p>
                </div>
              </div>
            </a>
          </div>
          {/* DEMO 3 Item    */}
          <div className="col-lg-4">
            <a href="http://vienetwork.net/">
              <div className="hover hover-3 text-white rounded"><img src={vision} alt="" />
                <div className="hover-overlay" />
                <div className="hover-3-content px-5 py-4">
                  <h3 className="hover-3-title text-uppercase font-weight-bold mb-1"><span className="font-weight-light">San Diego </span>County Outreach</h3>
                  <p className="hover-3-description small text-uppercase mb-0">artnership for healing, support, <br />and growth for our community.</p>
                </div>
              </div>
            </a>
          </div>
        
          <div className="col-lg-4">
            <a href="https://americanaviationrepairs.com/">
              <div className="hover hover-3 text-white rounded"><img src={repair} alt="" />
                <div className="hover-overlay" />
                <div className="hover-3-content px-5 py-4">
                  <h3 className="hover-3-title text-uppercase font-weight-bold mb-1"><span className="font-weight-light">American Aviation </span>Repair</h3>
                  <p className="hover-3-description small text-uppercase mb-0">We look after every <br />detail.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a href="https://americanaviationaircraftsales.com/">
              <div className="hover hover-3 text-white rounded"><img src={sales} alt="" />
                <div className="hover-overlay" />
                <div className="hover-3-content px-5 py-4">
                  <h3 className="hover-3-title text-uppercase font-weight-bold mb-1"><span className="font-weight-light">American Aviation </span>Aircraft Sales</h3>
                  <p className="hover-3-description small text-uppercase mb-0">Have something for sale? Looking <br />to purchase an aircraft.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a href="https://www.hopeandignity.org/">
              <div className="hover hover-3 text-white rounded"><img src={hd} alt="" />
                <div className="hover-overlay" />
                <div className="hover-3-content px-5 py-4">
                  <h3 className="hover-3-title text-uppercase font-weight-bold mb-1"><span className="font-weight-light">Hope </span>& Dignity</h3>
                  <p className="hover-3-description small text-uppercase mb-0">artnership for healing, support, <br />and growth for our community.</p>
                </div>
              </div>
            </a>
          </div>
        


        </div> {/*  End Of row no-gutters projects */}
      </div> {/* End Of  */}
      
    </section> 
  
    )
}
 
export default Portfolio