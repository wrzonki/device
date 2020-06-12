import React from 'react';
import '../styles/reset.scss';
import '../styles/global.scss';
import Section from '../components/section/section';
import Device from '../components/device/device';

export default function Home() {
  return (
    <Section>
      <Device></Device>
    </Section>
  );
}
