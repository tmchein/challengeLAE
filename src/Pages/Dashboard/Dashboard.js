import React from 'react';
import DashContent from '../../Components/DashContent/DashContent';
import NavBar from '../../Components/NavBar/NavBar';
import style from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={style.o_main_container}>
      <NavBar />
      <DashContent />
    </div>
  );
};

export default Dashboard;
