import React from 'react';
import {connect} from 'react-redux';

// function HomeComponent(props) {
//     console.log(props.posts.forEach(ele=>{console.log(ele)}));
//     let postList=props.posts.length? return(
//         props.posts.map(post=>{
//             <div className="card horizontal" key={post.id}>
//                 <div className="card-image">
//                     <img src="https://lorempixel.com/100/190/nature/6" />
//                 </div>
//                 <div className="card-stacked">
//                     <div className="card-content">
//                     <p>{post.title}</p>
//                     </div>
//                     <div className="card-action">
//                     <a href="#">This is a link</a>
//                     </div>
//                 </div>
//             </div>
//         })
//     ):(
//         return(<h1>No posts</h1>);
//     )
//     return (
//         {postList}
//     );
// }

class HomeComponent extends React.Component{
    render(){
        const postList=this.props.posts.length?(
            this.props.posts.map(post=>
            {
                return(
                    <div className="card horizontal" key={post.id}>
                        <div className="card-image">
                            <img src={post.jetpack_featured_media_url}/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                            <p>{post.excerpt.rendered}</p>
                            </div>
                            <div className="card-action">
                            <a href={post.link}>{post.title.rendered}</a>
                            </div>
                        </div>
                    </div>
                )
            })
        ):(
            <h1>No posts</h1>
        )

        return (
            <div className="container">
                {postList}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(HomeComponent);