/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {

 const { createPage } = boundActionCreators

 return new Promise((resolve, reject) => {

   const posts = `allContentfulPost`;

   const postPromise = graphql(
     `
       {
         ${posts}(limit: 1000) {
           edges {
             node {
               id
             }
           }
         }
       }
     `
   )
   .then(result => {
       if (result.errors) {
         reject(result.errors)
       }

       // Create Product pages
       const postTemplate = path.resolve(`./src/templates/post.js`)

       _.each(result.data[posts].edges, edge => {

         createPage({
           path: `/posts/${edge.node.id}/`,
           component: slash(postTemplate),
           context: {
             id: edge.node.id,
           },
         })
       })

       // return resolve();
     })

   const pages = `allContentfulPage`;

   const pagePromise = graphql(
     `
       {
         ${pages}(limit: 1000) {
           edges {
             node {
               id,
               title
             }
           }
         }
       }
     `
   )
   .then(result => {
       if (result.errors) {
         reject(result.errors)
       }

       // Create Product pages
       const pageTemplate = path.resolve(`./src/templates/page.js`)

       _.each(result.data[pages].edges, edge => {

         createPage({
           path: `/${edge.node.title}/`,
           component: slash(pageTemplate),
           context: {
             id: edge.node.id,
           },
         })
       })

       // return resolve();
     })

    Promise.all([postPromise, pagePromise]).then(() => resolve())
   });
}
