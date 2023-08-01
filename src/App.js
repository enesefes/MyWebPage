import React from 'react';
import logo from './images/Logo.png';

import myPhoto from './images/myPhoto.jpg';

import code from "./images/code.svg"

import './App.css';
import ProjectDatabase from './components/ProjectData';
import base from './base';
import { useEffect } from 'react';
import { useState } from 'react';




import SportsSoccerOutlinedIcon from '@material-ui/icons/SportsSoccerOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import { FindInPage } from '@material-ui/icons';











function App() {

  const [project, setProject] = useState([]);
  
  

  

  useEffect(() => {
    base('Project').select({
      // Selecting the first 3 records in Grid view:
      // filterByFormula:`{${Shopify}} = ${Platforms}`,
      view: "Grid view",
  }).eachPage((records, fetchNextPage) => {
      setProject (records);
      fetchNextPage();
    });

  

    
  });

  

  return (
    
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="header__right">
          <a href="mailto:enes_efe_158@hotmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
        </div>
      </header>
      <div className="home">
        <div className="home_container">
          <div className="home_container_texts">
            <h1>Sports Scientist, Front End Developer, Entrepreneur</h1>
            <p>I love solving the problems near me.</p>
          </div>
          <img className="my__photo" src={myPhoto} alt="enes-efePhoto"/>
        </div>
       
      </div>

      <div className="home__codePhoto">
          <img src={code} alt="code_photo"/>
        </div>
      <div className="home__second">
          <div className="home__second__texts">
          <h1>Hello I'm Enes. Nice to meet you.</h1>
          <h2> I started problem solving with curiosity. At first, curiosity made me feel lost alone in such a large sea. Then this curiosity got more and more, and now I have been solving the problems around me using technology. </h2>
          </div>
      </div>
      <div className="about_me">
        <div className="jobs">
          <div className="about_me_jobs">
            <SportsSoccerOutlinedIcon fontSize="large"/>
            <h1>Sports Scientist</h1>
            <p className="jobs__p"> I love working on <b className="bold__color">new technologies</b> in the field of sports science.</p>
            <p className="jobs__p__head">Topics I'm interested in:</p>
            <p>Sport Analyze, Performance, Flexibility</p>
            <p className="jobs__p__head">Diploma and Certificates:</p>
            <p>Sports Management (B.Sc.)<br/>Sports Coaching (Double  Major)<br/>Pedagogical Formation (Certificate)<br/>TFF. C Football Certificate<br/>Pilates Reformer Level - 1<br/>Iaaf Kids' Athletics Coach (Certificate)<br/> Taekwondo (Black Belts 1. Dan) <br/> Kick Boxing (Brown Belts) <br/>Muay Thai (9. Khan)</p>
          </div>
          <div className="about_me_jobs">
            <CodeOutlinedIcon fontSize="large"/>
            <h1>Front End Developer</h1>
            <p className="jobs__p"> I love coding and releasing new products. Also, thanks to <b className="bold__color">curiosity</b>, I can realize many projects.</p>
            <p className="jobs__p__head">Languages I speak:</p>
            <p>Html, Css, Javascript, React, Svelte,</p>
            <p className="jobs__p__head__tools">Tools:</p>
            <p>Bubble.io<br/>Material Ui<br/>Bootstrap<br/>Photoshop<br/>Github<br/>Terminal</p>
          </div>
          <div className="about_me_jobs">
            <EmojiObjectsOutlinedIcon fontSize="large"/>
            <h1>Entrepreneur</h1>
            <p className="jobs__p"> <b className="bold__color"> Finding solutions to problems in some way</b> is at the center of my life.</p>
            <p className="jobs__p__head">Sectors I'm Interested in:</p>
            <p>Sports, Saas, Marketplace, E-commerce</p>
            <p className="jobs__p__head">Projects:</p>
            <ArrowDownwardOutlinedIcon id="below__icon"/>
          </div>
          
        </div>
       
            
      </div>
      <div className="my__projects">
              <h1>My Recent Work</h1>
              
              
              <div className="projects">
              
              {project.map((e) => (
                  <ProjectDatabase key={e.id} project={e}></ProjectDatabase>
                ))}
              </div>

             
                
                                                                         
      </div>
      <div className="contact">
        <h1>Interested in collaborating or investing?</h1>
        <p>I’m always open to discussing web development, or partnership opportunities.</p>
        
        
        <a href="mailto:enes_efe_158@hotmail.com" rel="noopener noreferrer" target="_blank">Start a conversation</a>
        
        
      </div>
      <footer className="footer">
        <div className="footer__img">
          <img src={logo} alt="iamenes.com__Logo"/>
        </div>
        <p>Lifetime student</p>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/enes-efe/" rel="noopener noreferrer" target="_blank">
            <div className="footer_social__Button" >
              <LinkedInIcon />
            </div>
          </a>
          <a href="https://github.com/enesefes" rel="noopener noreferrer" target="_blank">
          <div className="footer_social__Button">
            <GitHubIcon/>
          </div>
          </a>
          <a href="https://www.instagram.com/enes_efes/" rel="noopener noreferrer" target="_blank">
          <div className="footer_social__Button">
            <InstagramIcon/>
          </div>
          </a>
          <a href="mailto:enes_efe_158@hotmail.com" rel="noopener noreferrer" target="_blank">
          <div className="footer_social__Button">
            <MailIcon/>
          </div>
          </a>

          
        </div>
      </footer>
    </div>

  );
}

export default App;
