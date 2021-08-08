import React, { Component, useState } from "react";
import styled, { css } from "styled-components";

import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


function LoginPage(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  
  return (
    

    <Wrapper>
    <Container>
    <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
    </Container>
    </Wrapper>
  );
}


const Wrapper = styled.div``

const Container = styled.div`
  display: flex;
  position: absolute;
  top:500px;
  margin:;
  background-color: rgba(49,65,49,1);
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Login1 = styled.span`
  // font-style: normal;
  // font-weight: 400;
  // color: rgba(224,161,0,1);
  // font-size: 25px;
  // width: 74px;
  // height: 39px;
  // margin-top: 4px;
  // margin-left: 63px;
`;

const Signup = styled.span`
  // font-style: normal;
  // font-weight: 400;
  // color: rgba(32,32,32,1);
  // font-size: 20px;
  // margin-top: 114px;
  // margin-left: 104px;
`;

const buttonStyles = styled.div`

const MaterialMapViewStack = styled.div
  width: 414px;
  height: 896px;
  position: relative;
`;

export default LoginPage;
