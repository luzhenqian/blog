import React from "react"
import { graphql, Link } from "gatsby"

import { Breadcrumbs, Divider, makeStyles } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextPrev from "../components/next-prve"
import TalkyardCommentsIframe from "@debiki/gatsby-plugin-talkyard"

export default ({ data }) => {
  const post = data.markdownRemark
  const classes = useStyle({})
  return (
    <Layout>
      <Navigator />
      <SEO title={post.frontmatter.title} />
      <div className={classes.title}>{post.frontmatter.title}</div>
      <Divider />
      <AssetMeta
        author={post.frontmatter.author}
        date={post.frontmatter.date}
      />
      <div
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
      <NextPrev id={post.id} />
      发表评论
      <TalkyardCommentsIframe />
    </Layout>
  )
}

function AssetMeta({ author, date }) {
  const classes = useStyle({})
  return (
    <div className={classes.assetMeta}>
      <div>作者：{author}</div>
      <div>日期：{date}</div>
    </div>
  )
}

function Navigator() {
  const classes = useStyle({})
  return (
    <div className={classes.navigator}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link to="/">首页</Link>
        <Link to="/blog-list">博客</Link>
      </Breadcrumbs>
      <Divider />
    </div>
  )
}

const useStyle = makeStyles({
  navigator: {
    margin: "1rem 0",
  },
  title: {
    fontWeight: 800,
    fontSize: "1.5rem",
    marginBottom: "2rem",
  },
  assetMeta: {
    fontSize: "0.8rem",
    margin: "0.8rem 0",
  },
  content: {
    padding: "1rem 0",
  },
  nextPrev: {
    padding: "0.5rem 2rem",
  },
  next: {
    margin: "1rem 0",
  },
  prev: {
    margin: "1rem 0",
  },
})

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        author
        description
      }
    }
  }
`
