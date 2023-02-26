import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

player.on('timeupdate', ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
});

const startTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(startTime)
  .then(function (startTime) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
