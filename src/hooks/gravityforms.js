import { useStaticQuery, graphql ***REMOVED*** from 'gatsby'
export const AllGravityData = () => {
    const { allGfForm ***REMOVED*** = useStaticQuery(
        graphql`
            query {
                allGfForm {
                    edges {
                        node {
                            ...GravityFormComponent
                        ***REMOVED***
                    ***REMOVED***
                ***REMOVED***
            ***REMOVED***
        `
    )
    return allGfForm
***REMOVED***
