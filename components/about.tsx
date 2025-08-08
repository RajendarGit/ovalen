import React from 'react'
import Title from './title'
import Container from './container';
import Padded from './padded';
import CustomVideoPlayer from './custom-video-player';

const About = () => {
  return (
    <Padded>
        <Container>
      <div className='lg:w-2/3 mt-10 lg:mt-20'>
        <Title
        title="About Ovalen"
        description="Learn more about our mission and values. We are committed to providing high-quality products that meet the needs of our customers. We are dedicated to providing our customers with the best possible experience, and we are committed to continuously improving our products and services. We believe that our products and services should be reliable, durable, and easy to use. We are committed to providing our customers with the best possible experience, and we are dedicated to continuously improving our products and services. We believe that our products and services should be reliable, durable, and easy to use."
      />
      </div>
      </Container>
      <CustomVideoPlayer />


    </Padded>
  );
}

export default About