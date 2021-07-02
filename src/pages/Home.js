import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import Panorama from '../components/Panorama';

const Main = styled.main`
`;

const Form = styled.div`
  position: absolute;
  top: 80px;
  left: 20px;
  padding: 1rem;
  color: #fff;
  background-color: ${() => rgba('#fff', .3)};
  border-radius: .25rem;

  select {
    margin-bottom: .5rem;
  }

  label {
    cursor: pointer;
    user-select: none;
  }
`;

function Home() {

  const [selected, setSelected] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);

  const list = [
    {
      label: '2D_Spilit',
      resourceMode: 0,
      images: [
        './room1/cubemap_r.jpg',
        './room1/cubemap_l.jpg',
        './room1/cubemap_u.jpg',
        './room1/cubemap_d.jpg',
        './room1/cubemap_f.jpg',
        './room1/cubemap_b.jpg',
      ],
    },
    {
      label: '2D_Merge',
      resourceMode: 0,
      images: './2D_Merge.jpg',
    },
    {
      label: '360°_View',
      resourceMode: 1,
      images: './360_View.jpg',
    },
  ];

  return (
    <Main>
      <Form>
        <select value={selected} onChange={(e) => setSelected(e.target.value)} >
          {list.map((item, index) => <option key={item.label} value={index} >{item.label}</option>)}
        </select>
        <div>
          <input id="chkAutoPlay" type="checkbox" value={autoPlay} onChange={(e) => setAutoPlay(e.target.checked)} />
          <label htmlFor="chkAutoPlay">AutoPlay</label>
        </div>
      </Form>
      <Panorama images={list[selected].images} autoPlay={autoPlay} resourceMode={list[selected].resourceMode} />
    </Main>
  )
}

export default Home;
