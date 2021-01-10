import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { rgba } from 'polished';
import 'react-datepicker/dist/react-datepicker.min.css';
import './App.scss';

const Wrapper = styled.div`
  position: relative;
  padding: 1rem 0.5rem;
  border-radius: 3rem;
`;

const Card = styled.div`
  padding: 0.5rem;
  border-radius: 3rem;
  background: #471a8a;

  & .react-datepicker {
    border: 0;
    background: transparent;
    color: ${rgba('white', 0.85)};
  }

  & .react-datepicker__navigation {
    top: 0.875rem;
    opacity: 0.5;
  }

  & .react-datepicker__header {
    padding: 0;
    border: 0;
    background: transparent;
  }

  & .react-datepicker__current-month {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    color: ${rgba('white', 0.85)};
  }

  & .react-datepicker__day {
    outline: none;
    border-radius: 50%;
    color: ${rgba('white', 0.5)};
    transition: all 0.5s ease 0s;
  }

  & .react-datepicker__day-name {
    color: ${rgba('white', 0.25)};
  }

  & .react-datepicker__day-selected,
  & .react-datepicker__day--keyboard-selected,
  & .react-datepicker__day:hover {
    background: #311758;
    color: #fff;
  }
`;

const App = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="wrapper">
      <main className="page">
        <section className="page__sc sc">
          <div className="sc__container _container">
            <div className="sc__body">
              <Card>
                <Wrapper>
                  <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    inline
                  />
                </Wrapper>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
