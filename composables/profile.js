var dummyData = {
  intro: "Hi, I'm Crysta",
  aboutMe:
    'I enjoy traveling, thrifting and good music. I am a people person but if you dont find me with my friends or family there is a good chance I am out playing with my dogs. I am so happy that you are here and can not wait to get to know you!',
  fullAvi:
    'https://media.istockphoto.com/id/1173878161/photo/full-length-front-view-looking-at-camera-of-30-39-years-old-adult-beautiful-curly-hair-long.jpg?s=612x612&w=0&k=20&c=N_CR4p6spJWaFs8_b1zGNiQvqBvi9ZF1PHBDaIXOnPs='
};

export const useProfileInfo = () => useState('profileInfo', () => dummyData);
