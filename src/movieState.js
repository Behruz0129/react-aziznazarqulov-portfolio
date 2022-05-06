//import images
import kangaroo1 from './img/projects/kangaroo1.jpg';
import kangaroo2 from './img/projects/kangaroo2.jpg';
import iphoneseven1 from './img/projects/iphoneseven1.gif'
import iphoneseven2 from './img/projects/iphoneseven.png'
import spidermonkey1 from './img/projects/spider-monkey1.png'
import spidermonkey2 from './img/projects/spider-monkey2.jpg'

export const MovieState = () => {
  return [
    {
      name: 'Spider Monkey',
      mainImg: spidermonkey1,
      secondaryImg: spidermonkey2,
      url: '/projects/spidermonkey',
      type: 'photo',
      id: 2,
      awards: [
        {
          title: 'About Project',
          description:
            'This model can be used in the field of cinematography, game applications. The model`s grid is low poly.',
        },
        {
          title: 'What I did',
          description:
            'This model used a particle system and was created in 1 day. The part has been edited and colored in a realistic way.',
        },
      ],
    },
    {
      name: 'iPhone Trailer',
      mainImg: iphoneseven1,
      secondaryImg: iphoneseven2,
      url: '/projects/iphoneseven',
      type: 'video',
      id: 1,
      awards: [
        {
          title: 'About Project',
          description:
            'The video was made as an alternative to the iPhone trailer. Different color phone models were used in the animation.',
        },
        {
          title: 'What I did',
          description:
            'The prototype of the video can be used to make other commercials.',
        },
      ],
    },
    {
      name: 'Kangaroo',
      mainImg: kangaroo1,
      secondaryImg: kangaroo2,
      url: '/projects/kangaroo',
      type: 'photo',
      id: 0,
      awards: [
        {
          title: 'About Project',
          description:
            'This model can be used in the field of cinematography, game applications. The model`s grid is low poly.',
        },
        {
          title: 'What I did',
          description:
            'This model used a particle system and was created in 1 day. The part has been edited and colored in a realistic way.',
        },
      ],
    },
  ];
};

export default MovieState;
