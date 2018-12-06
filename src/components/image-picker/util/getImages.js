'use strict';

const DEFAULT_IMAGES = [
    [ 1, "turquoise"    ]
  , [ 2, "emerland"     ]
  , [ 3, "peter-river"  ]
  , [ 4, "amethyst"     ]
];

const NAME_INDEX = 1;

module.exports = function getImages () {
  let images = [];
  for (let i = 0; i < DEFAULT_IMAGES.length; i++) {
    images.push(DEFAULT_IMAGES[i]);
  }
  return images;
};
