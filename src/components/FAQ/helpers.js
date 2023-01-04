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

export { getQuestionIndex, open, close };
