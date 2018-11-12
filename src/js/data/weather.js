module.exports = {
  'location': 'Toronto, Canada',
  'prefixes': [
    {
      'prefix': 'a ',
      'patterns': [RegExp('^2', 'g'), RegExp('781', 'g')]
    }
  ],

  'temperatureRanges': [
    { 'descriptor': 'freezing', 'maxTemp': -10},
    { 'descriptor': 'cold', 'maxTemp': 4},
    { 'descriptor': 'cool', 'maxTemp': 10},
    { 'descriptor': 'mild', 'maxTemp': 15},
    { 'descriptor': 'warm', 'maxTemp': 25},
    { 'descriptor': 'hot', 'maxTemp': 100 },
  ]
}