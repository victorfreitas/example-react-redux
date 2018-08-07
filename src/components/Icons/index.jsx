import React from 'react'

const list = [
  'pacman',
  'happy',
  'happy2',
  'smile',
  'smile2',
  'tongue',
  'tongue2',
  'sad',
  'sad2',
  'wink',
  'wink2',
  'grin',
  'grin2',
  'cool',
  'cool2',
  'angry',
  'angry2',
  'evil',
  'evil2',
  'shocked',
  'shocked2',
  'baffled',
  'baffled2',
  'confused',
  'confused2',
  'neutral',
  'neutral2',
  'hipster',
  'hipster2',
  'wondering',
  'wondering2',
  'sleepy',
  'sleepy2',
  'frustrated',
  'frustrated2',
  'crying',
  'crying2',
]

export default () => (
  <div className="icons-wrap">
    <h2>
      Icons
    </h2>
    <div className="icons-content">
      {list.map(icon => <i key={icon} className={`icon icon-${icon}`} />)}
    </div>
  </div>
)
