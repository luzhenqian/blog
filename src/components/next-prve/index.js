import React from "react"
import { makeStyles, Paper } from "@material-ui/core"
import { Link, graphql, useStaticQuery } from "gatsby"

export default ({ id }) => {
  const query = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            id
            html
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  let prev = <span></span>
  let next = <span></span>
  const { edges } = query.allMarkdownRemark
  for (let i = 0; i < edges.length; i++) {
    if (edges[i].node.id === id) {
      if (edges[i].previous === null) {
        prev = <span>没有更多了</span>
      } else {
        prev = (
          <Link to={edges[i].previous.fields.slug}>
            {edges[i].previous.frontmatter.title}
          </Link>
        )
      }
      if (edges[i].next === null) {
        next = <span>没有更多了</span>
      } else {
        next = (
          <Link to={edges[i].next.fields.slug}>
            {edges[i].next.frontmatter.title}
          </Link>
        )
      }
      break
    }
  }
  edges.forEach(next => {
    if (next.id === id) {
    }
  })
  const classes = useStyle({})
  // FIXME:一个 js 中有多个 graphql 查询时，会混乱。默认的 data 会使用这个查询结果
  return (
    <Paper className={classes.nextPrev}>
      {/* FIXME: next 和 prev 反了，估计是 graphql 的原因 */}
      <div className={classes.prev}>上一篇：{next}</div>
      <div className={classes.next}>下一篇：{prev}</div>
    </Paper>
  )
}

const useStyle = makeStyles({
  nextPrev: {
    margin: "0.5rem 0",
    padding: "0.5rem 2rem",
  },
  next: {
    margin: "1rem 0",
  },
  prev: {
    margin: "1rem 0",
  },
})
