import React, { forwardRef, useEffect, useRef, useState } from "react";

// let counter = 0;

function ButtonCouter() {
  const countRef = useRef(0);

  // console.log("리랜더링");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    countRef.current++;
    console.log(countRef.current);
    // counter++;
    // console.log(counter);

    // setCount(count+1);
  };
  return <button onClick={handleClick}>Count</button>;
}

const MyForm = forwardRef((props, ref) => {
  const [form, setForm] = useState({
    title: "제목",
    author: "작성자",
    content: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const contentTextareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DOM:", titleInputRef.current);
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
    console.log("저장 성공");
  };
  useEffect(() => {
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
  }, []);

  const [isChanged, setInChanged] = useState(false);
  const prevForm = useRef(null);

  useEffect(() => {
    prevForm.current = { ...form };
    // console.log(prevForm.current);
    console.log(formRef);
  }, []);

  useEffect(() => {
    const hasChanged =
      prevForm.current.title !== form.title ||
      prevForm.current.author !== form.author ||
      prevForm.current.content !== form.content;
    setInChanged(hasChanged);
  }, [form]);

  const formRef = useRef(null);
  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <fieldset>
        <legend>글쓰기</legend>
        <input
          ref={titleInputRef}
          type="text"
          name="title"
          placeholder="제목"
          value={form.title}
          onChange={handleForm}
        />
        <hr />
        <input
          ref={authorInputRef}
          type="text"
          name="author"
          placeholder="작성자"
          value={form.author}
          onChange={handleForm}
        />
        <hr />
        <textarea
          ref={contentTextareaRef}
          type="text"
          name="content"
          placeholder="내용"
          value={form.content}
          onChange={handleForm}
        />
        <hr />
        <button disabled={!isChanged}>전송</button>
      </fieldset>
    </form>
  );
});

function AppRef(props) {
  const myFormRef = useRef(null);

  useEffect(() => {
    console.log(myFormRef);
  }, []);
  
  return (
    <>
      <h2>Count</h2>
      <ButtonCouter />
      <ButtonCouter />
      <h2>Form</h2>
      <MyForm ref={myFormRef} />
    </>
  );
}

export default AppRef;
