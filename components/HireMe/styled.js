import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { mediaQuery } from '../../utils';

export const Container = styled.section`
  padding: 0;
  form {
    max-width: 600px;
  }

  ${mediaQuery[1]} {
    form {
      margin: 0 32px;
    }
  }

  .error {
    margin: -1em 0 1em 0;
    color: red;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1.5em;

  label {
    position: absolute;
    transform: translateY(-50%);
    left: 2%;
    top: 50%;
    transition: transform 0.1s ease-in;
    color: #666;
  }

  label.text-area {
    top: 10%;
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      label {
        transform: translateY(-50%);
        background-color: #fff;
        z-index: 2;
      }
    `};
`;
export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  appearance: none;
  border: ${({ hasError }) =>
    hasError ? '1px solid red' : '1px solid rgba(31, 31, 31, 0.4)'};
  display: inline-block;
  color: #333333;
  padding: 12px 10px;
  width: 100%;
  font-size: 15px;
  line-height: 20px;
  transition: box-shadow 100ms ease;
  outline: none;

  &:focus {
    border: 1px solid #4253ff;
  }

  &:focus ~ label {
    transform: translateY(-150%);
    background-color: #fff;
    z-index: 2;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  appearance: none;
  border: ${({ hasError }) =>
    hasError ? '1px solid red' : '1px solid rgba(31, 31, 31, 0.4)'};
  display: inline-block;
  color: #333333;
  padding: 12px 10px;
  width: 100%;
  font-size: 15px;
  line-height: 20px;
  transition: box-shadow 100ms ease;
  outline: none;

  &:focus {
    border: 1px solid #4253ff;
  }

  &:focus ~ label {
    top: 0 !important;
    transform: translateY(-50%);
    background-color: #fff;
    z-index: 2;
  }
`;

export const Alert = styled.p`
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
  padding: 1.5rem 0.2rem;
  margin-bottom: 1.5em;
`;
