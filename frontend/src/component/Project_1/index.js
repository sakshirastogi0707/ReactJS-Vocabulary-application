import React, { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
export default function VocabularyApp() {
  const [inputValue, setInputValue] = useState("");
  const [msg, setMsg] = useState(null);
  const [data, setData] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      backgroundColor: "white",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50vw",
      height: "50vh",
    },
  };
  const onSubmit = async () => {
    const msg = !inputValue ? "*You must enter a word to fetch" : "";
    setMsg(msg);
    setLoading(true);
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
    );
    const json = await response.json();
    let res = await json[0]?.meanings
      .flatMap((m) => m.definitions)
      .flatMap((d) => d.definition);
    setLoading(false);
    setData(res);
    setIsOpen(true);
  };
  let subtitle;
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  return (
    <div className="container">
      <div className="inner_container">
        <h2 className="heading">Vocabulary App</h2>
        <input
          className="input"
          type="text"
          placeholder="Write a word..."
          autoComplete="off"
          autoCorrect=""
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p className="msg">{msg}</p>
        <button className="btn" disabled={loading} onClick={() => onSubmit()}>
          Submit
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={modalIsOpen}
        style={customStyles}
      >
        <div className="heading-background">
          <h1 className="modal-heading">{`Word Meaning-${inputValue}`}</h1>
        </div>

        {data?.map((item) => {
          if (data == null) {
            return <p>Please enter a valid world</p>;
          } else {
            return (
              <div>
                <p>{item}</p>
              </div>
            );
          }
        })}
        <button className="closeBtn" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </Modal>
      <ToastContainer />
    </div>
  );
}
