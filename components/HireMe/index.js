import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import { Container, Input, TextArea, InputContainer, Alert } from './styled';

const Index = () => {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }, [message]);

  const validationSchema = Yup.object().shape({
    name: Yup.string('Must be a string')
      .min(3, 'must be more than 3 characters')
      .required('Name field is required'),
    email: Yup.string('Must be a string')
      .email('Invalid Email')
      .required('Email field is required'),
    message: Yup.string('Must be a string')
      .min(9, 'must be more than 9 characters')
      .required('Message field is required'),
  });
  return (
    <Container className="max-width" id="contact">
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(state, { resetForm, setSubmitting }) => {
          const templateId = process.env.templateId;
          const userID = process.env.userID;

          setSubmitting(true);
          emailjs
            .send('gmail', templateId, state, userID)
            .then((res) => {
              setMessage(
                'Thank you, I am going to contact you back as soon as possible'
              );
              resetForm();
              setSubmitting(false);
            })
            .catch((err) => {
              setSubmitting(false);
            });
        }}
      >
        {({ values, errors, isSubmitting, touched }) => {
          const isError = (key) => errors[key] && touched[key];
          return (
            <Form>
              {message && <Alert>{message}</Alert>}

              <InputContainer hasValue={values.name}>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  as={Input}
                  hasError={isError('name')}
                />
                <label htmlFor="name">Full Name*</label>
              </InputContainer>
              <ErrorMessage className="error" name="name" component="div" />
              <InputContainer hasValue={values.email}>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  as={Input}
                  hasError={isError('email')}
                />
                <label htmlFor="email">Email*</label>
              </InputContainer>
              <ErrorMessage className="error" name="email" component="div" />
              <InputContainer hasValue={values.message}>
                <Field
                  type="text"
                  name="message"
                  id="message"
                  as={TextArea}
                  hasError={isError('message')}
                  rows="10"
                />
                <label htmlFor="message" className="text-area">
                  Message*
                </label>
              </InputContainer>
              <ErrorMessage className="error" name="message" component="div" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="call-for-action"
              >
                {isSubmitting ? 'Submitting' : 'Submit'}
              </button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default Index;
