import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px 10px;
  margin: 10px;
  .DashboardWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    -webkit-box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
    box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
  }
  .Day {
    margin: 10px 0 10px 0;
    min-height: 20px;
    color: #0859bd;
    font-size: 35px;
    font-weight: 400;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
  .User {
    font-weight: 300;
    font-size: 18px;
    min-height: 100px;
  }
  .BurgerWrapper {
    min-height: 158px;
  }
  .Burger {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 300;
  }
  .BurgerIcon {
    font-size: 70px;
  }
  @media (max-width: 1215px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px 10px;
    margin: 10px;
  }
  @media (max-width: 785px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 10px;
    margin: 10px;
  }
  @media (max-width: 535px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px 10px;
    margin: 10px;
  }
`;

const apiUrl = 'http://localhost:3001';

const fetchBurgers = () =>
  axios.get(`${apiUrl}/burgers`).then((res) => res.data);
const fetchUsers = () => axios.get(`${apiUrl}/users`).then((res) => res.data);
const fetchSchedule = () =>
  axios.get(`${apiUrl}/schedule`).then((res) => res.data);
const fetchBotd = () => axios.get(`${apiUrl}/botd`).then((res) => res.data);

export const Dashboard = () => {
  const [weekSchedule, setWeekSchedule] = useState([]);
  useEffect(() => {
    Promise.all([
      fetchBurgers(),
      fetchSchedule(),
      fetchUsers(),
      fetchBotd(),
    ]).then((responses) => {
      const burgers = responses[0];
      const schedule = responses[1];
      const users = responses[2];
      const botd = responses[3];
      const days = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ];
      const result = days.map((currentDay) => {
        const filteredSchedule = schedule.filter((userSchedule) =>
          userSchedule.workDays.includes(currentDay)
        );
        const scheduledUsers = filteredSchedule.map((userSchedule) =>
          users.find((user) => user.id === userSchedule.userId)
        );

        const burgerOfTheDay = botd.find((data) => data.day === currentDay);

        let burger;

        if (!burgerOfTheDay) {
          burger = null;
        } else {
          burger = burgers.find((data) => data.id === burgerOfTheDay.burgerId);
        }

        return {
          day: currentDay,
          scheduledUsers,
          burger,
        };
      });
      setWeekSchedule(result);
    });
  }, []);

  return (
    <StyledDashboard>
      {weekSchedule.map((schedule) => (
        <div key={`${schedule.day}`} className="DashboardWrapper">
          <div className="ScheduleWrapper">
            <div className="Day">{schedule.day.toUpperCase()}</div>
            <div className="User">
              {schedule.scheduledUsers.map((name) => (
                <div key={`${name.name}`}>{name.name}</div>
              ))}
            </div>
          </div>
          <div className="BurgerWrapper">
            <span className="BurgerIcon" aria-label="burger" role="img">
              🍔
            </span>
            {schedule.burger && (
              <div className="Burger">{schedule.burger.name}</div>
            )}
            {!schedule.burger && <div>...</div>}
          </div>
        </div>
      ))}
    </StyledDashboard>
  );
};
