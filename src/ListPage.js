import React from 'react'
import Post from './Post'
import {
    createFragmentContainer,
    graphql
  } from 'react-relay'

class ListPage extends React.Component {
    render() {
        return (
            <div className='w-100 flex justify-center'>
                <div className='w-100' style={{ maxWidth: 400 }}>
                    {this.props.viewer.allPosts.edges.map(({node}) =>
                        <Post key={node.id} post={node} />
                    )}
                </div>
            </div>
        )
    }
}
export default createFragmentContainer(ListPage, graphql`
  fragment ListPage_viewer on Viewer {
    ...Post_viewer
    allPosts(last: 100, orderBy: createdAt_DESC) @connection(key: "ListPage_allPosts", filters: []) {
      edges {
        node {
          id
          description
          imageUrl
          ...Post_post
        }
      }
    }
  }
`)