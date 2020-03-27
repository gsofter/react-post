import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.css'

class PostItem extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="post-wrapper">
                <div className="vote-info-wrapper">
                    <div className="vote-info">
        <span className="vote-count"> { this.props.post.vote_count}</span>
                        <span className="vote-up">
                            <button onClick={() => { this.props.onUpVote(this.props.id)}}> <i className="fas fa-caret-up"></i> </button>
                        </span>
                        <span className="vote-down">
                            <button onClick={() => { this.props.onDownVote(this.props.id)}}> <i className="fas fa-caret-down"></i> </button>
                        </span>
                    </div>
                </div>
                <div className="post">
                    <div className="user-info"> 
                        <div className="user-avatar">
                            <img src="/images/user-avatar.jpg"/>
                        </div>
                        <div className="user-name">
                            <span > Filip Justic </span>
                        </div>
                        <div className="post-time">
                            <span> 13 hours ago </span>
                        </div>
                    </div>
                    <div className="post-context">
                        <h1 className="post-title"> { this.props.post.title} </h1>
                        <p className="post-description"> { this.props.post.description} </p>
                        <img src={this.props.post.image_url} />
                    </div>
                    <div className="post-info">
                        <div className="comment">
                            <i className="fas fa-comments"></i>
                            <span className="comment-count"> 356 comments </span>
                        </div>
                        <div className="share">
                            <i className="fas fa-share"></i>
                            <span> Share </span>
                        </div>
                        <div className="more">
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PostItem;