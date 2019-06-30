import React , { fragment } from 'react'
import spinner from './spinner.gif';

const spinner = () =>
    <fragment>
      <img src={spinner} alt="loading..." style={{ width: '200px', margin: 'auto', display: 'block' }}/>
    </fragment>

export default spinner
