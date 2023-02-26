import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

const onTimeUpdate = throttle(({ seconds }) => {
//   console.log(seconds);
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000); // затримка виклику функції - 1000 мілісекунд

player.on('timeupdate', onTimeUpdate);

const startTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(startTime)
  .then(function (startTime) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'The time was less than 0 or greater than the video’s duration.'
        );
        break;

      default:
        console.log('An error occurred');
        break;
    }
  });
