import React from 'react'

const About = () => {
    return (
      
        <section id="background">
        {/* ************************************************************************ */}
        {/* ************************** Main Body Section *************************** */}
        {/* ************************************************************************ */}
        <section id="aboutContent" className="aboutContent">
          <section className="about">
            <section id="aboutText">
              <h2>Who Am I?</h2>
              <p>Hi, my name is Joel, I have been working on websites for 5 years.
                I am currently working on getting my certificate in Full Stacks Development
                through York University.
                I enjoy helping non-profits and help companies market as well as update, maintain,
                and redesign their website so that they can be as affective as possible.
                If you would like
                to see some of the work that I have already done please check out the portfolio section of my site.
              </p>
            </section> {/* End Of aboutText */}
            <section className="skillBars">
              <h2>Skills</h2>
              <p>HTML</p>
              <div className="progress">
                <div className="progress-value html">90%</div>
              </div>
              <p>CSS</p>
              <div className="progress">
                <div className="progress-value css">80%</div>
              </div>
              <p>JavaScript</p>
              <div className="progress">
                <div className="progress-value js">30%</div>
              </div>
              <p>jQuery</p>
              <div className="progress">
                <div className="progress-value jQuery">60%</div>
              </div>
            </section> {/* End Of skillBars */}
            <section className="resume">
              <h2>Experience</h2>
              <article className="resumeList">
                <p className="resumeText">We Will Go Ministries </p><p className="resumeinfo">1 year website updates and edtis.</p><p /><br />
                <p className="resumeText">Crosspointe Life Church<br /> </p><p className="resumeinfo">4 year website edits and maintenance. Created site and created hole new site with new platform. <br /> Take care of there social media, graphic creation and advertising</p><p /><br />
                <p className="resumeText">CityHope</p><p className="resumeinfo">4 year website edits &amp; maintenace. Trasnfered site from hoasts.</p><p />
              </article>
            </section> {/* End of resume */}
          </section> {/* End Of about */}
        </section> {/* End Of aboutContent*/}
        
        
      </section>
    )
}

export default About