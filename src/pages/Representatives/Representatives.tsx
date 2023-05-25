import { SetStateAction, useState } from 'react';
import styled from 'styled-components';
import Input from '@components/Input';
import Button from '@components/Button';
import { ContactFormWrap, ContactBgWrap, SectionTriangle } from './styled';
import { post } from '@utils/api';
import CountrySelector from '@components/CountrySelect';
import { Container } from '@components/wrappers';

export interface ICountry {
  label: string;
  value: string;
}

const Representative = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [telegram, setTelegram] = useState<string>('');
  const [linkedin, setLinkedIn] = useState<string>('');
  const [country, setCountry] = useState<ICountry | null>(null);
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await post('public/reps', {
      email,
      name,
      message,
      country: country?.label,
      telegram,
      whatsapp,
      linkedin,
    });
    if (result?.errors) {
      // handle errors
    } else {
      // handle success
    }
  };

  return (
    <>
      <ContactBgWrap>
        <div>
          <SectionTriangle />
          <Container>
            <ContactFormWrap>
              <div>
                <h2>Become a representative</h2>
                <p>
                  Sign up for our Representatives program, Introduce your friends and followers to
                  the best Move to Earn app out there and share a portion of their rewards!
                </p>
                <p>Fill out the form below and we will get back to you within 24 hours!</p>
                <form onSubmit={handleSubmit}>
                  <Input
                    label="Contact Person*"
                    value={name}
                    type="text"
                    onChange={e => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                  <Input
                    label="Email*"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    placeholder="email@example.com"
                    required
                  />
                  <label style={{ padding: '0 15px', width: '100%' }}>Your Country*</label>
                  <CountrySelector
                    placeholder={'Select Country'}
                    value={country}
                    onChange={(value: ICountry | null) => setCountry(value)}
                  />
                  <Input
                    label="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    placeholder="Your Whatsapp"
                    type="text"
                  />
                  <Input
                    label="Telegram"
                    value={telegram}
                    onChange={e => setTelegram(e.target.value)}
                    placeholder="Your Telegram"
                    type="text"
                  />
                  <Input
                    label="LinkedIn"
                    value={linkedin}
                    onChange={e => setLinkedIn(e.target.value)}
                    placeholder="Your LinkedIn"
                    type="text"
                  />
                  <Input
                    type="text"
                    label="Message*"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Your Message"
                    required
                  />
                  <div style={{ margin: '10px 0', height: '1rem' }}>{response}</div>
                  <Button variant="primary">Send</Button>
                </form>
              </div>
            </ContactFormWrap>
          </Container>
        </div>
      </ContactBgWrap>
    </>
  );
};
export default Representative;
