import { SectionStyled } from './Section.styled';
import { TitleStyled } from './Title.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <TitleStyled>{title}</TitleStyled>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
