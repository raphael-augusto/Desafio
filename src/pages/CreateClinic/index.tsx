import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FiArrowLeft,
  FiUser,
  FiHome,
  FiFlag,
  FiMail,
  FiPhone,
} from 'react-icons/fi';

import swal from 'sweetalert';
import api from '../../services/api';

import {
  ContainerSideBar,
  Clinic,
  LinkBack,
  Container,
  CreateCLinic,
  ButtonNome,
  CheckButton,
  DivLabel,
} from './styles';

import Sidebar from '../../components/SideBar/index';
import logo from '../../images/logo2.png';

const ClinicCreat: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [andress, setAndress] = useState('');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [serviceAvailable, setServiceAvailable] = useState<string[]>([]);

  // criar função para o arrey de service available

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      console.log('function funfando');

      await api.post('clinic', {
        name,
        andress,
        cep,
        email,
        whatsapp,
        service_available: serviceAvailable,
      });

      swal('Registered clinic!', 'Click ok to proceed', 'success');

      history.push('/');
    },
    [andress, cep, email, history, name, serviceAvailable, whatsapp],
  );

  return (
    <>
      <ContainerSideBar>
        <Clinic>
          <aside>
            <h1>Cadastramento da cliníca</h1>
          </aside>
        </Clinic>

        <LinkBack to="/">
          <FiArrowLeft size={20} color="#000" />
        </LinkBack>
      </ContainerSideBar>

      <Container>
        <CreateCLinic>
          <img src={logo} alt="Logo" width={300} height={300} />

          <ButtonNome>
            <DivLabel>
              <input
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Name"
              />
              <FiUser style={{ position: 'absolute', right: 16, bottom: 15 }} />
            </DivLabel>
            <DivLabel>
              <input
                value={andress}
                onChange={event => setAndress(event.target.value)}
                placeholder="Andress"
              />
              <FiHome style={{ position: 'absolute', right: 16, bottom: 15 }} />
            </DivLabel>
            <DivLabel>
              <input
                value={cep}
                onChange={event => setCep(event.target.value)}
                placeholder="CEP"
              />
              <FiFlag style={{ position: 'absolute', right: 16, bottom: 15 }} />
            </DivLabel>
            <DivLabel>
              <input
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email"
              />
              <FiMail style={{ position: 'absolute', right: 16, bottom: 15 }} />
            </DivLabel>
            <DivLabel>
              <input
                value={whatsapp}
                onChange={event => setWhatsapp(event.target.value)}
                placeholder="Whatsapp"
              />
              <FiPhone
                style={{ position: 'absolute', right: 16, bottom: 15 }}
              />
            </DivLabel>

            <CheckButton>
              <h2>Service Available</h2>
              <ul>
                <li>
                  <span>Clinical exams</span>
                  <input
                    id="c1"
                    type="checkbox"
                    value={serviceAvailable}
                    onClick={event => setServiceAvailable(['Clinical exams'])}
                  />
                </li>
                <li>
                  <span>Complementary Exams</span>
                  <input
                    id="c2"
                    type="checkbox"
                    value={serviceAvailable}
                    onClick={
                      event => setServiceAvailable(['Complementary Exams'])
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                  />
                </li>
                <li>
                  <span>PPRA</span>
                  <input
                    id="c3"
                    type="checkbox"
                    value={serviceAvailable}
                    onClick={event => setServiceAvailable(['PPRA'])}
                  />
                </li>
                <li>
                  <span>PCMSO</span>
                  <input
                    id="c4"
                    type="checkbox"
                    value={serviceAvailable}
                    onClick={event => setServiceAvailable(['PCMSO'])}
                  />
                </li>

                <li>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    value="Confirmar"
                  >
                    Confirmar cadastro
                  </button>
                </li>
              </ul>
            </CheckButton>
          </ButtonNome>
        </CreateCLinic>
      </Container>
    </>
  );
};

export default ClinicCreat;
