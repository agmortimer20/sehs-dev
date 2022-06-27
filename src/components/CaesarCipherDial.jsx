import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function CaesarCipherDial() {
  const [degree, setDegree] = useState(0);
  const [dialKey, setDialKey] = useState(0);
  const [plaintext, setPlaintext] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let forwardDisabled = useMemo(() => dialKey == 25, [dialKey]);
  let backwardDisabled = useMemo(() => dialKey == 0, [dialKey]);

  const overlayStyle = {
    position: "absolute",
    bottom: "13%",
    zIndex: 1,
  };

  function increaseDial() {
    setDegree(degree + 13.846);
    setDialKey(dialKey + 1);
  }

  function decreaseDial() {
    setDegree(degree - 13.846);
    setDialKey(dialKey - 1);
  }

  function encrypt() {
    let text = "";

    for (let char of plaintext.toUpperCase()) {
      text += LETTERS.includes(char)
        ? LETTERS[__mod__(LETTERS.indexOf(char) + dialKey, 26)]
        : char;
    }

    setCiphertext(text);
  }

  function decrypt() {
    let text = "";

    for (let char of ciphertext.toUpperCase()) {
      text += LETTERS.includes(char)
        ? LETTERS[__mod__(LETTERS.indexOf(char) - dialKey, 26)]
        : char;
    }

    setPlaintext(text);
  }

  function __mod__(a, b) {
    a = +a;
    b = +b;
    return ((a % b) + b) % b;
  }

  return (
    <>
      <div className="row justify-content-center">
        {/* Dial */}
        <div className="col-sm-12 col-md-4">
          <div className="position-relative">
            <img
              src="/assets/img/caesar-dial-outer.png"
              className="img-fluid"
              alt="dial outer"
            />
            <div style={overlayStyle}>
              <motion.img
                src="/assets/img/caesar-dial-inner.png"
                animate={{ rotate: degree }}
                className="d-block mx-auto w-75"
                alt="dial inner"
              />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="key" className="form-label">
              Key:
            </label>
            <input
              id="key"
              type="text"
              className="form-control w-auto"
              readOnly
              value={dialKey}
            />
            <div className="row mt-3">
              <div className="col-auto">
                <button
                  className="btn btn-primary"
                  onClick={decreaseDial}
                  disabled={backwardDisabled}
                >
                  Backward
                </button>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-primary"
                  onClick={increaseDial}
                  disabled={forwardDisabled}
                >
                  Forward
                </button>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="plaintext">Plaintext:</label>
            <textarea
              id="plaintext"
              className="form-control"
              rows="3"
              value={plaintext}
              onChange={(e) => {
                setPlaintext(e.target.value);
              }}
            ></textarea>
            <button
              className="form-control btn btn-primary mt-2"
              onClick={encrypt}
            >
              Encrypt
            </button>
          </div>
          <div className="mb-3">
            <label htmlFor="ciphertext">Ciphertext:</label>
            <textarea
              id="ciphertext"
              className="form-control"
              rows="3"
              value={ciphertext}
              onChange={(e) => {
                setCiphertext(e.target.value);
              }}
            ></textarea>
            <button
              className="form-control btn btn-primary mt-2"
              onClick={decrypt}
            >
              Decrypt
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
