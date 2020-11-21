import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const Footer = () =>{
    const footerAuthor = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }`)
    return (
        <footer>
            Created by {footerAuthor.site.siteMetadata.author}, &copy;, 2020
        </footer>
    )
}

export default Footer;