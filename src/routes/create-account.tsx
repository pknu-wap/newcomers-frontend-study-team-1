import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

const Title = styled.h1`
  font-size: 42px;
`;

const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;

  &[type="submit"] {
    cursor: pointer;
    background-color: #555555;
    color: white;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Error = styled.span`
  font-weight: 680;
  color: tomato;
`;

const Switcher = styled.span`
  margin-top: 20px;

  a {
    color: #1d9bf0;
  }
`;

export default function CreateAccount() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (isLoading || name === "" || email === "" || password === "") return;

    try {
      setLoading(true);

      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(credentials.user, {
        displayName: name,
      });

      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }

    console.log(name, email, password);
  };

  return (
    <Wrapper>
      <Title>Join</Title>

      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="name"
          value={name}
          placeholder="Name"
          type="text"
          required
        />

        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />

        <Input
          onChange={onChange}
          value={password}
          name="password"
          placeholder="Password"
          type="password"
          required
        />

        <Input
          type="submit"
          value={isLoading ? "Loading..." : "Create Account"}
        />
      </Form>

      {error !== "" ? <Error>{error}</Error> : null}

      <Switcher>
        Already have an account?{" "}
        <Link to="/login">Log in &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}