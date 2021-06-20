import React from 'react'
import BooksCard from './components/BooksCard'
import Grid from '@material-ui/core/Grid'

class Project extends React.Component {
	state = {
		Project: []
	}

	componentDidMount() {
		fetch('https://api.airtable.com/v0/app9zfPCWF8CLuGyG/Table%201?api_key=keyogwD6vVcXyASVC')
			.then(res => res.json())
			.then(res => {
				console.log(res.records)
				this.setState({ Project: res.records })
			})
			.catch(error => console.log(error))
	}

	// render function will come here
}

export default Project