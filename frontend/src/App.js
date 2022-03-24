import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DataTable from './components/DataTable'

function App() {
	console.log('app')
	const [domains, setDomains] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchPosts = async () => {
			console.log('fetchPosts')
			const res = await axios.get('extractResult.json');
			setDomains(res.data)
			setLoading(false)
		}
		fetchPosts()
	},[]);


	if (loading) {
		return (
			<h2>Loading...</h2>
		)
	} else {
		const domainName = domains[0].split('.')[domains[0].split('.').length - 2]
		console.log(domainName)
		return (
			<div className='all'>
				<h2 className='header'>{domainName} hosts</h2>
				<DataTable domains={domains} />
			</div>
		)
	}
}

export default App;
