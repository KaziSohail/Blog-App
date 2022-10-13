import './my.css';

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDisc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi distinctio sequi magni nostrum, ipsum nobis at sed et aspernatur fuga laudantium voluptate id qui ratione repellendus animi sint nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi distinctio sequi magni nostrum, ipsum nobis at sed et aspernatur fuga laudantium voluptate id qui ratione repellendus animi sint nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi distinctio sequi magni nostrum, ipsum nobis at sed et aspernatur fuga laudantium voluptate id qui ratione repellendus animi sint nihil?</p>
    </div>
  );
}
