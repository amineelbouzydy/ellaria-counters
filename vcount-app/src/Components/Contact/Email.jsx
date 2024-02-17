import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

export function Email(props) {
  const { name, email, message } = props;

  return (
    <Html lang="en">
      <h1>About People counters</h1>
      
    </Html>
  );
}