import React from 'react'



import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function ProjectDatabase({project}) {



    
    return (
        <div>
                
            
        <div className="project_contanier">
        <Card >
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
              Github
            </Button>
            <Button href={project.fields.Link} target="_blank" id="button" variant="contained" size="small" color="primary">
              Visit Web Page
            </Button>
          </CardActions>
        </Card>
</div>
            
        </div>
        
    )
}

export default ProjectDatabase
