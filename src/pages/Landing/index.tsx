import React, { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import Siderbar from '../../components/SideBar';

import { Container, Clinic } from './styles';

interface IClinicProps {
  id: string;
  name: string;
  andress: string;
  cep: string;
  email: string;
  whatsapp: string;
  service_available: string;
}

const Landing: React.FC = () => {
  const [clinic, setClinic] = useState<IClinicProps[]>([]);

  useEffect(() => {
    api.get(`/clinic`).then(response => {
      setClinic(response.data);
    });
  }, []);

  // console.log(clinic);

  return (
    <>
      <Siderbar />
      <Container>
        {clinic.map(index => (
          <Clinic key={index.id}>
            <h1>{index.name}</h1>
            <span>
              Andress: &nbsp;
              {index.andress}
            </span>
            <span>
              CEP:&nbsp;
              {index.cep}
            </span>
            <span>
              Email: &nbsp;
              <a href={`mailto:${index.email}`}>{index.email}</a>
            </span>
            <span>
              Whatsapp: &nbsp;
              {/* API WHATSAPP  ->  https://api.whatsapp.com/send?phone= */}
              <a href={`https://api.whatsapp.com/send?phone=${index.whatsapp}`}>
                {index.whatsapp}
              </a>
            </span>
            <span>
              Service available: &nbsp;
              {index.service_available}
            </span>
          </Clinic>
        ))}
      </Container>
    </>
  );
};

export default Landing;
