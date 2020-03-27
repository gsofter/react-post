import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import PostItem from './components/PostItem'
import './style.css'
export default class App extends React.Component {
  
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.loadMore = this.loadMore.bind(this)
    this.state = {posts: []}
  }
  componentDidMount() {
    // do some paginated fetch
    this.init()
  }

  init = () => {
    console.log('asdf')
    var posts = []
    for (var i = 0; i < 10; i++) {
      var new_post = {
        title: "PROJECT TITLE " + i,
        description: "PROJECT DESCRIPTION " + i,
        image_url: "/images/1.jpg",
        vote_count: 0,
      }
      posts.push(new_post)
    }
    this.setState({posts: posts})
  }

  loadMore() {
    console.log('loadmore')
    let new_post = {
      title: "asddfsdfsdfdsf",
      description: "asdfdsdfsdfsdfsdfsd",
      image_url: "/images/1.jpg",
      vote_count: 0,
    }

    const posts = this.state.posts.slice()
    posts.push(new_post)
    this.setState({posts: posts });
  }

  onUpVote = (post_id) => {
    const posts = this.state.posts.slice()
    posts[post_id].vote_count++;
    this.setState({posts: posts})
  }

  onDownVote = (post_id) => {
    const posts = this.state.posts.slice()
    posts[post_id].vote_count--;
    this.setState({posts: posts})
  }
  render() {
    return (
      <div className="main">
        <InfiniteScroll
          dataLength={1}
          pageStart={0}
          width={100}
          height={1000}
          next={this.loadMore}
          
          hasMore={true}
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.posts.length > 0
            ? this.state.posts.map((item, id) => (
                <PostItem key={id} id={id} post={item} onUpVote={this.onUpVote} onDownVote={this.onDownVote}/>
              ))
            : null}
        </InfiniteScroll>
      </div>
    )
  }
}