import React, { FormEvent, useState } from 'react';
import { Container } from '@components/wrappers';
import Input from '@components/Input';
import Button from '@components/Button';
import { SectionTriangle, ContactBgWrap, ContactFormWrap } from '@pages/Representatives/styled';
import { post } from '@utils/api';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await post('public/contact', { email, name, message });
    if (result?.errors?.message) {
      setResponse(result.errors.message[0]);
    } else {
      setResponse('Success! Will get back to You ASAP.');
      setEmail('');
      setName('');
      setMessage('');
    }
  };

  return (
    <>
      <ContactBgWrap>
        <SectionTriangle />
        <Container>
          <ContactFormWrap>
            <div>
              <h3>Contact us</h3>
              <p>For any potential partnerships please fill out the form below</p>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Contact Person"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  type="text"
                />
                <Input
                  label="Email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  type="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  placeholder="email@example.com"
                  required
                />
                <Input
                  label="Message"
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                  type="text"
                />
                <Button variant="primary">Send</Button>
              </form>
              <div style={{ margin: '10px 0' }}>{response}</div>
            </div>
          </ContactFormWrap>
        </Container>
      </ContactBgWrap>
    </>
  );
};
export default Contact;
