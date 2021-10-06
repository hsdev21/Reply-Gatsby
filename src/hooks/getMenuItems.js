import { useStaticQuery, graphql ***REMOVED*** from "gatsby";

const flatListToHierarchical = (
    data = [],
***REMOVED***idKey='id',parentKey='parentId',childrenKey='children'***REMOVED*** = {***REMOVED***
) => {
    const tree = [];
    const childrenOf = {***REMOVED***;
    data.forEach((item) => {
        const newItem = {...item***REMOVED***;
        const { [idKey]: id, [parentKey]: parentId = 0 ***REMOVED*** = newItem;
        childrenOf[id] = childrenOf[id] || [];
        newItem[childrenKey] = childrenOf[id];
        parentId
            ? (
                childrenOf[parentId] = childrenOf[parentId] || []
            ).push(newItem)
            : tree.push(newItem);
    ***REMOVED***);
    return tree;
***REMOVED***;

export const GetMenuItems = () => {
    const { primaryNav, footerNav ***REMOVED*** = useStaticQuery(graphql`
        query footerMenuItemsAndPrimaryMenuItems {
          primaryNav: wpcontent {
            menuItems(where: {location: PRIMARY_NAVIGATION***REMOVED***) {
              nodes {
                id
                parentId
                label
                path
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
          footerNav: wpcontent {
            menuItems(where: {location: FOOTER_NAVIGATION***REMOVED***) {
              nodes {
                path
                label
              ***REMOVED***
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
    `)
    return {
        primaryNav: flatListToHierarchical(primaryNav.menuItems.nodes),
        footerNav: footerNav.menuItems.nodes
    ***REMOVED***
***REMOVED***
