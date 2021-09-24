import React from 'react';
import { Container ***REMOVED*** from "react-bootstrap";
import pageHeaderStyles from './page-header.module.scss'

const PageHeader = ({pageTitle***REMOVED***) => (
    <Container className={pageHeaderStyles.pageHeader***REMOVED*** fluid>
        <Container>
            <h1>{pageTitle***REMOVED***</h1>
        </Container>
    </Container>
)

export default PageHeader;
