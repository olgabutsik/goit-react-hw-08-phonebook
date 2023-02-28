import { FilterTitleStyled, FilteredInputStyled } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ title, handleFilter, filterValue }) => {
  return (
    <>
      <FilterTitleStyled>{title}</FilterTitleStyled>
      <FilteredInputStyled
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleFilter}
        value={filterValue}
      />
    </>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  filterContacts: PropTypes.func.isRequired,
};
