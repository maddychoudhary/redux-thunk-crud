import React, { useState } from "react";
import shortid from "shortid";
import { addPost } from "../../../actions/postAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const AddPost = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const new_post = {
      title: title,
      body: body,
    };

    dispatch(addPost(new_post));
    history.push("/home");
  };
  return (
    <div className="container">
      <div className="py-4">
        <div className="card shadow">
          <div className="card-header">Add A Post</div>
          <div className="card-body">
            <form onSubmit={submitForm}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Body Text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              {(() => {
                if (title,body) {
                  return <button className="btn btn-primary btn-lg">Add New Post</button>
                } else {
                  return ""
                }
              })()}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
