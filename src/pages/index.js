import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

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
          }
        }
      }
    }
  }
`

const useStyles = makeStyles({
  card: {
    color: "red",
    backgroundColor: "rgb(0,0,0,0)",
  },
  article: {
    margin: "2rem 2rem",
    backgroundColor: "white",
  },
})

const Article = function(props) {
  const classs = useStyles()
  return (
    <div className={classs.article}>
      标题：{props.data.frontmatter.title}
      <br />
      简介：
      <div dangerouslySetInnerHTML={{ __html: props.data.html }}></div>
      日期：{props.data.frontmatter.date}
    </div>
  )
}

const IndexPage = ({ data }) => {
  console.log(data.allMarkdownRemark.edges)
  return (
    <Layout>
      <SEO title="Home" />
      <Grid container>
        <Grid item xs={8}>
          最新文章
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            return <Article key={index} data={node} />
          })}
        </Grid>
        <Grid item xs={4}>
          分类 关于
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
