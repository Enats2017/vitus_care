import { Icon } from '@iconify/react';
import React from 'react';
import {Link} from 'react-router-dom';

export default function ContactInfoWidget() {
  return (
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg">
          <Icon icon="ep:location" />
        </i>
        6th Floor, Awfis, Suncity Success Tower, Sector 65, Gurugram, Haryana, 122018
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
        <Link to={`tel:+919862898628`} >
        98628 98628
        </Link>
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        <Link to={`mailto:info@vituscare.com`} >
         info@vituscare.com
        </Link>
      </li>
    </ul>
  );
}
