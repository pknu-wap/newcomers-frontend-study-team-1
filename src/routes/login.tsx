import React, { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";    
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { Error, Input, Switcher, Title, Wrapper, Form } from "../components/auth-components";

export default function CreateAccount() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (isLoading || email === "" || password === "") return;

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }

    console.log(email, password);
  };

  return (
    <Wrapper>
      <Title>Join into X</Title>

      <Form onSubmit={onSubmit}>
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
          value={isLoading ? "Loading..." : "Log in"}
        />
      </Form>

      {error !== "" ? <Error>{error}</Error> : null}

      <Switcher>
        Already have an account? <Link to="/login">Log in →</Link>
      </Switcher>
    </Wrapper>
  );
}