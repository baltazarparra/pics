import React from 'react'
import Post from './Post'

const mockPostData = [
    {
        node: {
            id: '1',
            description: 'Bem loco memo',
            imageUrl: 'https://media.giphy.com/media/juSCTzqDAV1Xq/giphy.gif'
        }
    },
    {
        node: {
            id: '2',
            description: 'Rebitado!!!11!',
            imageUrl: 'https://media.giphy.com/media/E6jscXfv3AkWQ/giphy.gif'
        }
    }
]

class ListPage extends React.Component {
    render() {
        return (
            <div className='w-100 flex justify-center'>
                <div className='w-100' style={{ maxWidth: 400 }}>
                    {mockPostData.map(({node}) =>
                        <Post key={node.id} post={node} />
                    )}
                </div>
            </div>
        )
    }
}

export default ListPage