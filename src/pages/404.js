import React from "react"
import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Row>
        <Col className="my-auto">
        <h2>This page was lost</h2>
        <p>The page you are looking for isn’t available. Please use the home buttom above to go back.</p>
        </Col>
        <Col>
          <img
            src="./404.png"
            className="d-inline-block align-center"
            alt="404 error"
          />
        </Col>
      </Row>    
    </Container>
  </Layout>
)

export default NotFoundPage
