import React from 'react';
import tw from 'twin.macro';

const About = () => {
  return (
    <div tw="p-4 rounded-lg bg-black bg-opacity-80">
      <p>
        My name is Jesmar Castillo and I'm a software developer from Los
        Angeles, California. I graduated from{' '}
        <Highlight>UC Santa Barbara</Highlight> in June 2019 with a{' '}
        <Highlight>B.S in Computer Engineering</Highlight>. I have a personal
        interest in web development. I'm heavily dedicated to delivering work
        that focuses on taking complex processes and turning them into simple
        and enjoyable experiences. I'm currently looking for a software
        engineering position in the Los Angeles or Santa Barbara area. If you
        have any questions, please contact me at:
      </p>
      <p tw="flex flex-col mt-2">
        <p>
          <Highlight>Email:</Highlight> jesmarsc@gmail.com
        </p>
        <p>
          <Highlight>Phone:</Highlight> (818) 376-9341
        </p>
      </p>
    </div>
  );
};

const Highlight = tw.span`text-highlight font-semibold`;

export default About;
