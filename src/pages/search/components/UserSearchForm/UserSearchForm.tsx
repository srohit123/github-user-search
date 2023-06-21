import React from 'react'
import { 
  Button, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  Radio, 
  RadioGroup, 
  TextField 
} from '@mui/material';

import { Form, Formik } from 'formik';

import { SEARCH_BY_OPTIONS } from '../../constants';
import { UserSearchFormProps } from './UserSearchForm.props';
import { getSearchFormSchema } from '../../../../utils/methods';

import './UserSearchForm.styles.scss';

const UserSearchForm: React.FC<UserSearchFormProps> = (props) => {
  const { formData, onSubmit, onReset, disable } = props;

  return (
    <Formik 
      initialValues={{ ...formData, searchBy: SEARCH_BY_OPTIONS.user }}
      validationSchema={getSearchFormSchema()}
      onSubmit={onSubmit} 
      onReset={onReset} 
    >
      {({ 
        values, 
        touched, 
        errors,
        handleChange, 
        submitForm, 
        handleBlur,
        resetForm 
      }) => (
        <Form style={{ width: '35%' }} role='search'>
          <FormControl className='form-control'>
            <FormLabel 
              id="search-by-user-orgnization-radio-group"
            >
              Search by:
            </FormLabel>
            <RadioGroup
              value={values.searchBy}
              aria-labelledby='search-by-user-orgnization-radio-group'
              name='searchBy'
              aria-label='Select-Radio'
              aria-description='Search user or organization option'
              className='radio-group'
              defaultValue={SEARCH_BY_OPTIONS.user}
              onChange={handleChange}
            >
              {Object.keys(SEARCH_BY_OPTIONS).map((key) => (
                <FormControlLabel 
                  key={key} 
                  value={key} 
                  control={<Radio />} 
                  label={key} 
                />
              ))}
            </RadioGroup>
          </FormControl>

          <div className='text-field-wrapper'>
            <TextField
              value={values.searchQuery}
              name='searchQuery'
              aria-label='search-field'
              aria-description='Enter user or organization name.'
              placeholder={
                values.searchBy === SEARCH_BY_OPTIONS.user 
                ? 'Search User' 
                : 'Search Organization'
              }
              autoComplete='off'
              variant='outlined'
              onBlur={handleBlur}
              onChange={handleChange}
              className='search-query-field'
              error={touched.searchQuery && !!errors.searchQuery}
              helperText={touched.searchQuery && errors.searchQuery}
              fullWidth
            />
          </div>

          <div className='action-wrapper'>
            <Button
              variant='outlined'
              type='reset'
              aria-label='reset-button'
              aria-description='Click this button to reset the values.'
              onClick={() => resetForm({ 
                values: { 
                  searchQuery: '', 
                  searchBy: SEARCH_BY_OPTIONS.user
                } 
              })}
            >
              Reset
            </Button>
            <Button
              variant='contained'
              type='submit'
              aria-label='submit-button'
              aria-description='Click this button to search the user or organization data.'
              onClick={submitForm}
              disabled={disable}
            >
              Search
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default UserSearchForm;
