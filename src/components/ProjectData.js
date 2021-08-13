import React from 'react'
import "./projectData.css"



import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { StarTwoTone } from '@material-ui/icons';


function ProjectDatabase({project}) {



    
    return (
        <div>
                
            
        <div className="project_contanier">
        <Card >
        {/*
          <CardActionArea href={project.fields.Link} target="_blank">
            <CardMedia id="project__card__image"
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={project.fields.CUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography id="project__heading" gutterBottom variant="h5" component="h2">
                {project.fields.Title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {project.fields.Description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href={project.fields.Source} target="_blank" id="button__noneBgColor" size="small" color="primary">
              Source Code
            </Button>
            <Button href={project.fields.Link} target="_blank" id="button" variant="contained" size="small" color="primary">
              Visit Web Page
            </Button>
          </CardActions>
        */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
              <div className="project" style={{background:project.fields.background_color}}>
                  <div className="project_left">
                    <div className="project_platform">
                      <img className="brand_logo" src={project.fields.Platform_logo_link}></img>
                      {project.fields.Platform_name == "Custom Development" && <p>Custom Development</p>}
                    </div>
                    <div>
                    <Typography id="project__heading" gutterBottom variant="h5" component="h2">
                      {project.fields.Title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {project.fields.Description}
                    </Typography>
                    </div>
                    <div>
                      <Button href={project.fields.Source} target="_blank" id="button__noneBgColor" size="small" color="primary">
                        Source Code
                      </Button>
                      <Button href={project.fields.Link} target="_blank" id="button" variant="contained" size="small" color="primary">
                        Visit Web Page
                      </Button>
                      
                      
                      
                    </div>
                    
                  </div>
                  <div className="project_right">
                      <img src={project.fields.CUrl} />
                  </div>
              </div>
          </Grid>

        </Grid>
        </Card>
</div>
            
        </div>
        
    )
}

export default ProjectDatabase
