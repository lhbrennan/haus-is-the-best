import store from './store';
import { incrementActiveSixteenthNote } from './actions';

const { getState, subscribe, dispatch } = store;

let currentPlaying = false;
let currentSwing;
let currentBpm;

let timerOnBeats;
let timerOffBeats;

const handleChange = () => {
  const { playing, bpm, swing, tracks: { bars } } = getState();

  const previousPlaying = currentPlaying;
  const previousSwing = currentSwing;
  const previousBpm = currentBpm;

  currentPlaying = playing;
  currentSwing = swing;
  currentBpm = bpm;

  const sixteenthNoteInterval = 60000 / (bpm * 4);

  const startAnimationTimers = () => {
    console.log(`starting onBeatTimer with swing=${swing}`);
    timerOnBeats = setInterval(() => {
      dispatch(incrementActiveSixteenthNote(bars));
    }, sixteenthNoteInterval * 2);

    setTimeout(() => {
      console.log(`starting offBeatTimer with swing=${swing}`);
      dispatch(incrementActiveSixteenthNote(bars));
      timerOffBeats = setInterval(() => {
        dispatch(incrementActiveSixteenthNote(bars));
      }, sixteenthNoteInterval * 2);
    }, sixteenthNoteInterval + (swing / 10));
  };

  if (!previousPlaying && currentPlaying) {
    startAnimationTimers();
  }

  if (previousPlaying && !currentPlaying) {
    clearInterval(timerOnBeats);
    clearInterval(timerOffBeats);
  }

  if (previousPlaying && (previousSwing !== currentSwing || previousBpm !== currentBpm)) {
    clearInterval(timerOnBeats);
    clearInterval(timerOffBeats);

    startAnimationTimers();
  }
};

export default subscribe(handleChange);
