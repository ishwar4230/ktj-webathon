import "./style.css";

const Post = () => {
  return (
    <div className="form">
      <div className="form-body">
        <div className="title">
          <input
           name="title"
            className="form__input"
            type="text"
            id="ptitle"
            placeholder="Enter the title"
          required/>
        </div>

        <div className="detail">
          <input
          name="detail"
            className="form__input"
            type="text" 
            id="detail"
            placeholder="Enter details of the post"
          required/>
        </div>

        <div className="url">
          <input
          name="url"
            className="form__input"
            type="url"
            id="url"
            placeholder="Enter url of the post"
          required/>
        </div>
        <div className="member">
          <input
          name="member"
            className="form__input"
            type="number"
            id="member"
            placeholder="Enter number of members"
          required/>
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="btn">
          Add Post
        </button>
      </div>
    </div>
  );
};

export default Post;