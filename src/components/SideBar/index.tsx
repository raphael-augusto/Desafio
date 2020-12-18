import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container, PageClinic, LinkBack } from './styles';

const Siderbar: React.FC = () => {
  return (
    <>
      <Container>
        <PageClinic>
          <aside>
            <h1>Clínicas cadastradas</h1>
          </aside>
        </PageClinic>

        <LinkBack to="/clinic/create">
          <FiArrowRight size={20} color="#000" />
        </LinkBack>
      </Container>
    </>
  );
};
export default Siderbar;
