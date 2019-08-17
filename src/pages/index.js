import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { Card } from "@material-ui/core"
const style = {
  article: {
    margin: "2rem 0",
  },
  title: {
    fontSize: "2rem",
    color: "rgb(30, 144, 255)",
  },
  date: {
    margin: "0.5rem 0",
    fontSize: "0.8rem",
  },
  description: {
    margin: "1rem 0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineClamp: 3,
    boxOrient: "vertical",
  },
  aboutCard: {
    marginTop: "2rem",
    padding: "1rem",
  },
  name: {
    display: "block",
    fontWeight: "bolder",
    textAlign: "center",
  },
  introduce: {
    display: "block",
    fontSize: "0.8rem",
  },
}
const About = function() {
  const classes = useStyles()
  return (
    <Card className={classes.aboutCard}>
      <span className={classes.name}>卢振千</span>
      <span className={classes.introduce}>程序员，擅长学习，精通Web应用</span>
      {/* <Card style={style.aboutCard}> */}
      {/* <span style={style.name}>卢振千</span> */}
      {/* <span style={style.introduce}>程序员，擅长学习，精通Web应用</span> */}
    </Card>
  )
}
const Categories = function() {
  // const classes = useStyles({})
  return <Card></Card>
}

const Article = function({ data }) {
  const classes = useStyles()
  return (
    <div className={classes.article}>
      <Link to={data.fields.slug} className={classes.title}>
        {data.frontmatter.title}
      </Link>
      <div className={classes.date}>{data.frontmatter.date}</div>
      <div className={classes.description}>
        摘要：{data.frontmatter.description}
      </div>
      <Divider />
    </div>
  )
}

const IndexPage = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={10}>
        <Grid item xs={12} lg={8}>
          最新文章
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            // const classes = useStyles()
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

const useStyles = makeStyles({
  article: {
    margin: "2rem 0",
  },
  title: {
    fontSize: "2rem",
    color: "rgb(30, 144, 255)",
  },
  date: {
    margin: "0.5rem 0",
    fontSize: "0.8rem",
  },
  description: {
    margin: "1rem 0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineClamp: 3,
    boxOrient: "vertical",
  },
  aboutCard: {
    marginTop: "2rem",
    padding: "1rem",
  },
  name: {
    display: "block",
    fontWeight: "bolder",
    textAlign: "center",
  },
  introduce: {
    display: "block",
    fontSize: "0.8rem",
  },
})

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
