import React, { useEffect, useRef, useState } from "react";
import { submitComment } from "../../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSucessMessage, setshowSucessMessage] = useState(false);
  const commentEl = useRef();
  const emailEl = useRef();
  const nameEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.clear("name", name);
      window.localStorage.clear("email", email);
    }

    submitComment(commentObj).then((res) => {
      setshowSucessMessage(true);
      setTimeout(() => {
        setshowSucessMessage(false);
      }, 3000);
    });
  };
  return (
    <div className="bg-gray-900 shadow-lg rounded-lg  p-8  my-10 pb-12 mb-8 ">
      <h3 className="text-l player mb-8 font-semibold border-b pb-4">
        Add a Comment
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          placeholder="Comment"
          name="comment"
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          placeholder="Name"
          name="name"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          ref={emailEl}
          placeholder="Email"
          name="email"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p>}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="">
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="px-2 text-gray-400 cursor-pointer "
            htmlFor="storeData"
          >
            Save my email and name for the next time i comment.
          </label>
        </div>
      </div>
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-indigo-800 press2p rounded-full text-white px-8 py-3 cursor-pointer font-bold"
        >
          Post Comment
        </button>
        {showSucessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Message Sent
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
