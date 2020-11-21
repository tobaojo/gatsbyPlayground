import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const aboutPage = () => {
    return (
       <Layout>
            <h1>About Page Title</h1>
            <p>This is the about page</p>
            <p>you can reach me here: <Link to="/contact">contact</Link></p>

       </Layout>
    )
}

export default aboutPage;