import React from 'react';
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from 'react-router-dom';

export default function Pages404() {
  return (
    <div>
        <ErrorMessage/>
        <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
        <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/marvel-started/">Back to main page</Link>
    </div>
  )
}
