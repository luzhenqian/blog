import React from "react"

import styles from "./index.module.css"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { Card } from "@material-ui/core"

const About = function() {
  return (
    <Card className={styles.aboutCard}>
      <span className={styles.name}>卢振千</span>
      <span className={styles.introduce}>程序员，擅长学习，精通Web应用</span>
    </Card>
  )
}
const Categories = function() {
  return <Card></Card>
}

const Article = function({ data }) {
  return (
    <div className={styles.article}>
      <Link to={data.fields.slug} className={styles.title}>
        {data.frontmatter.title}
      </Link>
      <div className={styles.date}>{data.frontmatter.date}</div>
      <div className={styles.description}>
        摘要：{data.frontmatter.description}
      </div>
      <Divider />
    </div>
  )
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={10}>
        <Grid item xs={12} lg={8}>
          最新文章
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            return <Article key={index} data={node} />
          })}
        </Grid>
        <Grid item xs={12} lg={4}>
          <About />
          <Categories />
        </Grid>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      limit: 10
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            date
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default IndexPage
