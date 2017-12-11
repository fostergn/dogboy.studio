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

     graphql(
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

         return resolve();
       })
     })
 }
