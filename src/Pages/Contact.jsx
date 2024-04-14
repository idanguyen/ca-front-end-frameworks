import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
`;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const InputForm = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 91%;
  padding: 30px;
  border: 1px solid;
  border-radius: 4px;
`;

const SubmitBtn = styled.button`
  padding: 20px 40px;
  background-color: #6a4944;
  color: white;
  cursor: pointer;
  transition: background-color 1s ease;

  &:hover {
    background-color: #6a6300;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    FULLNAME: "",
    SUBJECT: "",
    EMAIL: "",
    BODY: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = (e) => {
    try {
      e.preventDefault();

      console.log("submitted: ", formData);

      setFormData({
        FULLNAME: "",
        SUBJECT: "",
        EMAIL: "",
        BODY: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Title>Contact</Title>
      <Form onSubmit={submit}>
        <InputForm>
          <Label htmlFor="FULLNAME">Full Name:</Label>
          <Input
            type="text"
            id="FULLNAME"
            name="FULLNAME"
            value={formData.FULLNAME}
            onChange={handleInput}
            required
            minLength={3}
          />
        </InputForm>
        <InputForm>
          <Label htmlFor="SUBJECT">Subject:</Label>
          <Input
            type="text"
            id="SUBJECT"
            name="SUBJECT"
            value={formData.SUBJECT}
            onChange={handleInput}
            required
            minLength={3}
          />
        </InputForm>
        <InputForm>
          <Label htmlFor="EMAIL">Email:</Label>
          <Input
            type="EMAIL"
            id="EMAIL"
            name="EMAIL"
            value={formData.EMAIL}
            onChange={handleInput}
            required
          />
        </InputForm>
        <InputForm>
          <Label htmlFor="BODY">Body:</Label>
          <TextArea
            id="BODY"
            name="BODY"
            value={formData.BODY}
            onChange={handleInput}
            required
            minLength={3}
          />
        </InputForm>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
    </Container>
  );
};

export default Contact;
