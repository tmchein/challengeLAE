import React, { useState } from 'react';
import DashContent from '../../Components/DashContent/DashContent';
import NavBar from '../../Components/NavBar/NavBar';
import style from './Dashboard.module.scss';

const Dashboard = () => {
  const [title, settitle] = useState('Inicio');

  const handleTitle = (name) => {
    settitle(name);
  };

  return (
    <div className={style.o_main_container}>
      <NavBar navTitle={handleTitle} />
      <DashContent sectionTitle={title} />
    </div>
  );
};

export default Dashboard;
