import React, { Fragment, useEffect } from 'react';
import { Redirect } from '@reach/router';
import { useCookies } from 'react-cookie';

// ? Components
import { WrappedFormComponent } from '../../Components/FormComponent/FormComponent';

export function Inicio() {
  const [cookies, setCookie] = useCookies(['values']);
  useEffect(() => {
    console.log('cookies inicio: ', Boolean(cookies.values));
  }, [cookies]);
  return (
    <Fragment>
      {Boolean(cookies.values) && <Redirect noThrow to="/home" />}
      <WrappedFormComponent
        onHandleSaveDataUser={values => setCookie('values', values)}
      />
    </Fragment>
  );
}
