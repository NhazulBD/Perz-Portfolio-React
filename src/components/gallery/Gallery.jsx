import React, { useState } from 'react';
import logo_1 from '../../assets/img/works/logo_1.jpg';
import logo_2 from '../../assets/img/works/logo_2.jpg';
import logo_3 from '../../assets/img/works/logo_3.jpg';
import logo_4 from '../../assets/img/works/logo_4.jpg';
import logo_5 from '../../assets/img/works/logo_5.jpg';
import logo_6 from '../../assets/img/works/logo_6.jpg';
import logo_7 from '../../assets/img/works/logo_7.jpg';
import logo_8 from '../../assets/img/works/logo_8.jpg';
import logo_9 from '../../assets/img/works/logo_9.jpg';
import logo_10 from '../../assets/img/works/logo_10.jpg';
import logo_11 from '../../assets/img/works/logo_11.jpg';
import logo_12 from '../../assets/img/works/logo_12.jpg';
import logo_13 from '../../assets/img/works/logo_13.jpg';
import logo_14 from '../../assets/img/works/logo_14.jpg';
import logo_15 from '../../assets/img/works/logo_15.jpg';
import logo_16 from '../../assets/img/works/logo_16.jpg';
import logo_17 from '../../assets/img/works/logo_17.jpg';
import logo_18 from '../../assets/img/works/logo_18.jpg';
import logo_19 from '../../assets/img/works/logo_19.jpg';
import logo_20 from '../../assets/img/works/logo_20.jpg';
import logo_21 from '../../assets/img/works/logo_21.jpg';
import logo_22 from '../../assets/img/works/logo_22.jpg';
import logo_23 from '../../assets/img/works/logo_23.jpg';
import logo_24 from '../../assets/img/works/logo_24.jpg';

const logos = [
  {logo:logo_1 },
  {logo:logo_2 },
  {logo:logo_3 },
  {logo:logo_4 },
  {logo:logo_5 },
  {logo:logo_6 },
  {logo:logo_7 },
  {logo:logo_8 },
  {logo:logo_9 },
  {logo:logo_10},
  {logo:logo_11},
  {logo:logo_12},
  {logo:logo_13},
  {logo:logo_14},
  {logo:logo_15},
  {logo:logo_16},
  {logo:logo_17},
  {logo:logo_18},
  {logo:logo_19},
  {logo:logo_20},
  {logo:logo_21},
  {logo:logo_22},
  {logo:logo_23},
  {logo:logo_24},
];

export default function Photoswipe() {
  return (
    <>
      {logos ? logos.map((logo, i) => {
        return (
          <div key={i} className='col-10 col-md-4 col-lg-3 mb-4 img-filter mx-auto'>
            <img src={logo.logo} alt="Image Gallery" className='w-100' />
          </div>
        )
      }):""}
    </>
  );
}