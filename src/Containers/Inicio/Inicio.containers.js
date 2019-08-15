import React, { Fragment, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from '@reach/router';

// ? Components
import { WrappedFormComponent } from '../../Components/FormComponent/FormComponent';

export function Inicio() {
  const [cookies, setCookie] = useCookies(['values']);
  useEffect(() => {
    console.log('cookies: ', Boolean(cookies.values));
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
