import React from 'react';
import Typed from 'react-typed';
import './Mycomponent.css';

const MyComponent = () => {
  const iam = "I'm into ";
  const arr = [
    'Web Development',
    'Frontend Development',
    'Web Design',
    'React',];

  return (
    <div className="animated-typing">
      {iam}
      <Typed className="typed-text"
        strings={arr.map((item, index) => `<span class="text">${item}</span>`)}
        typeSpeed={150}
        backSpeed={100}
        loop
      />
    </div>
  );
};

export default MyComponent;
