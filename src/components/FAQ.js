import React from "react";
import { useState, useEffect, useRef } from "react";

function FAQ() {
  const [opened, setOpened] = useState([false, false, false]);
  const [question, setQuestion] = useState();

  const refs = [useRef(), useRef(), useRef()];

  function handleClick(e) {
    const questionIndex = getQuestionIndex(e.target);
    setQuestion(questionIndex);

    setOpened((prevState) => {
      return prevState.map((question, i) =>
        i === questionIndex ? !prevState[i] : prevState[i]
      );
    });
  }

  function handleKeyDown(e) {
    e.key === "Enter" || e.key === " " ? handleClick(e) : "";
  }

  useEffect(() => {
    if (question === undefined) {
      return;
    }

    opened[question] ? open(refs[question]) : close(refs[question]);
  }, [opened]);

  function getQuestionIndex(target) {
    return target.htmlFor
      ? Number(target.htmlFor[1]) - 1
      : Number(target.parentElement.htmlFor[1]) - 1;
  }

  function open(ref) {
    ref.current.style.height = `${ref.current.scrollHeight}px`;

    ref.current.style.opacity = "1";
  }

  function close(ref) {
    ref.current.style.height = "0px";
    ref.current.style.opacity = "0";
  }

  return (
    <section className="FAQs-container">
      <h2 className="FAQs-title">Frequently Asked Questions</h2>
      <div className="FAQ-container">
        <input type="checkbox" id="q1" checked={opened[0]} />
        <label
          className="question"
          htmlFor="q1"
          id="first-question"
          onClick={handleClick}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="button"
          aria-expanded={opened[0]}
        >
          <h3 className="question-text">
            What are the benefits of a password generator?
          </h3>

          <div className="plus" aria-hidden={true}></div>
        </label>

        <p
          className="answer"
          ref={refs[0]}
          aria-labelledby="first-question"
          aria-hidden={!opened[0]}
        >
          Password generators save time as you don't have to come up with a
          password yourself. The randomness prevents repeat passwords and
          patterns which make your accounts more vunerable to attacks.
        </p>
      </div>

      <div className="FAQ-container">
        <input type="checkbox" id="q2" checked={opened[1]} />
        <label
          className="question"
          htmlFor="q2"
          id="second-question"
          onClick={handleClick}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="button"
          aria-expanded={opened[1]}
        >
          <h3 className="question-text">What makes a strong password?</h3>

          <div className="plus" aria-hidden={true}></div>
        </label>

        <p
          className="answer"
          ref={refs[1]}
          aria-labelledby="second-question"
          aria-hidden={!opened[1]}
        >
          A strong password is <span>random</span>, <span>unique</span> and{" "}
          <span>long</span>. Random means there are no discernable patterns.
          Unique means your other accounts won't share it and if one account is
          compromised it won't spill over. Long means it will take an extremely
          long time to crack. This tool makes all of this easy to accomplish.
        </p>
      </div>

      <div className="FAQ-container">
        <input type="checkbox" id="q3" checked={opened[2]} />
        <label
          className="question"
          htmlFor="q3"
          id="third-question"
          onClick={handleClick}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="button"
          aria-expanded={opened[2]}
        >
          <h3 className="question-text">
            {" "}
            What are some general password safety tips I should know?
          </h3>

          <div className="plus" aria-hidden={true}></div>
        </label>

        <div
          className="answer lists"
          ref={refs[2]}
          aria-labelledby="third-question"
          aria-hidden={!opened[2]}
        >
          <div className="do">
            <h3 className="do-title">
              Do <div className="do-tick"></div>
            </h3>
            <ul>
              <li>Use a password generator for all your passwords.</li>
              <li>Use a reputable password manager.</li>
              <li>
                Use passwords of atleast 16 characters comprised of lowercase
                and uppercase letters, numbers and symbols.
              </li>
              <li>
                Change your passwords at regular intervals, for example, every 3
                - 6 months.
              </li>
              <li>Use two-factor authentication where possible.</li>
              <li>
                Hand write and remember your master passwords, storing them in a
                secure location instead of anywhere digitally.
              </li>
            </ul>
          </div>

          <div className="dont">
            <h3 className="dont-title">
              Don't{" "}
              <div className="dont-x">
                <svg
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
              </div>
            </h3>
            <ul>
              <li>Include personal information in your passwords.</li>
              <li>Use the same or similar passwords across accounts.</li>
              <li>Share your password with anybody.</li>
              <li>
                Use sensitive information on unencrypted or public networks.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
