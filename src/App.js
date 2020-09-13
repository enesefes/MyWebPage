import React from 'react';
import logo from './images/Logo.png';
import WpLogo from "./images/wp__logo.png"
import myPhoto from './images/myPhoto.jpeg';
import Direktsell from "./images/direktsell.com.png"
import code from "./images/code.svg"
import Direktlink from "./images/direktlink.png"
import SaasLand from "./images/saasLandPage.png"
import NoteApp from "./images/noteApp.png"
import Forcial from "./images/forcila.png"
import BubbleLogo from "./images/bubble__logo.svg"
import './App.css';



import SportsSoccerOutlinedIcon from '@material-ui/icons/SportsSoccerOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




function App() {
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
          <h2>Problem çözmeye merakla başladım. Merak beni en başta o kadar büyük bir denizin içinde tek başıma kaybolmuşum gibi hissterdi. Sonra bu merak daha fazla arttı ve şimdilerde etrafımında ki problemleri teknolojiyi kullanarak çözer oldum.</h2>
          </div>
      </div>
      <div className="about_me">
        <div className="jobs">
          <div className="about_me_jobs">
            <SportsSoccerOutlinedIcon fontSize="large"/>
            <h1>Sports Scientist</h1>
            <p className="jobs__p"> Spor bilimleri alanında <b className="bold__color">yeni teknolojiler</b> üzerine çalışmayı çok seviyorum.</p>
            <p className="jobs__p__head">Topics I'm interested in:</p>
            <p>Sport Analyze, Performance, Flexibility</p>
            <p className="jobs__p__head">Diploma and Certificates:</p>
            <p>Sports Management (B.Sc.)<br/>Sports Coaching (Double  Major)<br/>Pedagogical Formation (Certificate)<br/>TFF. C Football Certificate<br/>Pilates Reformer Level - 1<br/>Iaaf Kids' Athletics Coach (Certificate)<br/> Taekwondo (Black Belts 1. Dan) <br/> Kick Boxing (Brown Belts) <br/>Muay Thai (9. Khan)</p>
          </div>
          <div className="about_me_jobs">
            <CodeOutlinedIcon fontSize="large"/>
            <h1>Front End Developer</h1>
            <p className="jobs__p">Kodlamayı ve yeni ürünler çıkarmaya bayılıyorum. Ayrıca <b className="bold__color">merak</b> sayesinde bir çok projeyi hayata geçirebilirim.</p>
            <p className="jobs__p__head">Languages I speak:</p>
            <p>Html, Css, Javascript, React, Svelte,</p>
            <p className="jobs__p__head__tools">Tools:</p>
            <p>Bubble.io<br/>Material Ui<br/>Bootstrap<br/>Photoshop<br/>Github<br/>Terminal</p>
          </div>
          <div className="about_me_jobs">
            <EmojiObjectsOutlinedIcon fontSize="large"/>
            <h1>Entrepreneur</h1>
            <p className="jobs__p"> <b className="bold__color">Problemlere bir şekilde çözüm bulmak</b> benim hayatımın merkezinde yer alıyor.</p>
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
                  <div className="project_contanier">
                    <Card >
                      <CardActionArea href="https://whatsapp-2d2e9.web.app/" target="_blank">
                        <CardMedia id="project__card__image"
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image={WpLogo}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography id="project__heading" gutterBottom variant="h5" component="h2">
                            Whatsapp Clone
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Bu çalışmada react ve firebase kullanılmıştır. Ve kullanıcı gmail ile giriş sistemi yapılmıştır.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button href="https://github.com/enesefes/whatsappClone" target="_blank" id="button__noneBgColor" size="small" color="primary">
                          Github
                        </Button>
                        <Button href="https://whatsapp-2d2e9.web.app/" target="_blank" id="button" variant="contained" size="small" color="primary">
                          Visit Web Page
                        </Button>
                      </CardActions>
                    </Card>
                    </div>
                   
                  <div className="project_contanier">
                    <Card >
                      <CardActionArea href="https://direktsell.com/" target="_blank">
                        <CardMedia id="project__card__image"
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image={Direktsell}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography id="project__heading" gutterBottom variant="h5" component="h2">
                            Direktsell.com
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            İhracaat ve ithalat yapmak isteyenlerin buluştuğu ilanları şirketlerini ve diğer şirketlerle iletişime geçtiği pazaryeri.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <a href="https://bubble.io/" rel="noopener noreferrer" target="_blank">
                          <img id="bubbleLogo" src={BubbleLogo} alt="bubble__logo"/>
                        </a>
                        
                        <Button href="https://direktsell.com/" target="_blank" id="button" variant="contained" size="small" color="primary">
                          Visit Web Page 
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                  <div className="project_contanier">
                    <Card >
                      <CardActionArea href="https://direktlink.bubbleapps.io/" target="_blank">
                        <CardMedia id="project__card__image"
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image={Direktlink}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography id="project__heading" gutterBottom variant="h5" component="h2">
                            Linktree Clone
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            İnstagram satıcıları için kendi ürünlerini ve bilgilerini ekleyebilikleri bir mini e ticaret sitesidir.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                      <a href="https://bubble.io/" rel="noopener noreferrer" target="_blank">
                          <img id="bubbleLogo" src={BubbleLogo} alt="bubble__logo"/>
                        </a>
                        
                        <Button href="https://direktlink.bubbleapps.io/" target="_blank" id="button" variant="contained" size="small" color="primary">
                          Visit Web Page 
                        </Button>
                      </CardActions>
                    </Card>
                    
                  </div>
                  
                  
              </div>

              <div className="projects">
                  <div className="project_contanier">
                    <Card >
                      <CardActionArea href="https://eflandingpagepro.bubbleapps.io/" target="_blank">
                        <CardMedia id="project__card__image"
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image={SaasLand}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography id="project__heading" gutterBottom variant="h5" component="h2">
                            Saas Landing Page
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Bu proje sadece tek bir sayfadan oluşmaktadır ve bubble ile yapılmıştır. Bubble ile tasarım da yapabilirsiniz.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <a href="https://bubble.io/" rel="noopener noreferrer" target="_blank">
                          <img id="bubbleLogo" src={BubbleLogo} alt="bubble__logo"/>
                        </a>
                        
                        <Button href="https://eflandingpagepro.bubbleapps.io/" target="_blank" id="button" variant="contained" size="small" color="primary">
                          Visit Web Page 
                        </Button>
                      </CardActions>
                    </Card>
                    </div>
                   
                  <div className="project_contanier">
                    <Card >
                      <CardActionArea href="https://upbeat-bell-787d7a.netlify.app/" target="_blank">
                        <CardMedia id="project__card__image"
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image={NoteApp}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography id="project__heading" gutterBottom variant="h5" component="h2">
                            My Note App
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Bu uygulama not almak için yapılmıştır ve kullanıcı login sistemi userbase ve svelte kullanılarak yapılmıştır
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button href="https://github.com/enesefes/svelteUserbaseNotApp" target="_blank" id="button__noneBgColor" size="small" color="primary">
                          Github
                        </Button>
                        <Button href="https://upbeat-bell-787d7a.netlify.app/" target="_blank" id="button" variant="contained" size="small" color="primary">
                          Visit Web Page
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                  <div className="project_contanier">
                    <Card >
                      <CardActionArea href="https://forcial.bubbleapps.io/" target="_blank">
                        <CardMedia id="project__card__image"
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image={Forcial}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography id="project__heading" gutterBottom variant="h5" component="h2">
                            Forcial
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Antrenör ve üyeleri için yapılan bir Saas uygulamasıdır. Bubble ile yapılmıştır videolar youtube api ile alınmıştır.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <a href="https://bubble.io/" rel="noopener noreferrer" target="_blank">
                          <img id="bubbleLogo" src={BubbleLogo} alt="bubble__logo"/>
                        </a>
                        
                        <Button href="https://forcial.bubbleapps.io/" target="_blank" id="button" variant="contained" size="small" color="primary">
                          Visit Web Page 
                        </Button>
                      </CardActions>
                    </Card>                    
                  </div>                  
              </div>                                                             
      </div>
      <div className="contact">
        <h1>Interested in collaborating or investing?</h1>
        <p>I’m always open to discussing product design work or partnership opportunities.</p>
        
        
        <a href="mailto:enes_efe_158@hotmail.com" rel="noopener noreferrer" target="_blank">Start a convertion</a>
        
        
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