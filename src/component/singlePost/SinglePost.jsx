import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
        <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Autor:<b>Kazi</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis, blanditiis quae sequi voluptates expedita fuga voluptate porro voluptatum dolorem temporibus quas? Repudiandae autem deserunt atque provident tenetur aliquam ullam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis, blanditiis quae sequi voluptates expedita fuga voluptate porro voluptatum dolorem temporibus quas? Repudiandae autem deserunt atque provident tenetur aliquam ullam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis, blanditiis quae sequi voluptates expedita fuga voluptate porro voluptatum dolorem temporibus quas? Repudiandae autem deserunt atque provident tenetur aliquam ullam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis, blanditiis quae sequi voluptates expedita fuga voluptate porro voluptatum dolorem temporibus quas? Repudiandae autem deserunt atque provident tenetur aliquam ullam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis, blanditiis quae sequi voluptates expedita fuga voluptate porro voluptatum dolorem temporibus quas? Repudiandae autem deserunt atque provident tenetur aliquam ullam!</p>
      </div>
    </div>
  );
}
