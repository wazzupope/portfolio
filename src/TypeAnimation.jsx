import { TypeAnimation } from 'react-type-animation';
 
const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        'healthcare.',
        1000,
        'wellness.',
        1000,
        'athletics.',
        1000,
        'sports leagues.',
        1000,
        'tournaments.',
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={false}
      repeat={Infinity}
      style={{ display: 'inline-block' }}
    />
  );
};

export default Animation