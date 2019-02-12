module.exports = {
  'weatherConditions': [
    { 'descriptor': 'stormy', 'pattern': RegExp('^2', 'g') },
    { 'descriptor': 'drizzling', 'pattern': RegExp('^3', 'g') },
    { 'descriptor': 'rainy', 'pattern': RegExp('^5', 'g') },
    { 'descriptor': 'snowy', 'pattern': RegExp('^6', 'g') },
    { 'descriptor': 'misty', 'pattern': RegExp('^701', 'g') },
    { 'descriptor': 'smoky', 'pattern': RegExp('^711', 'g') },
    { 'descriptor': 'hazy', 'pattern': RegExp('^721', 'g') },
    { 'descriptor': 'sandstormy(?!)', 'pattern': RegExp('^731', 'g') },
    { 'descriptor': 'foggy', 'pattern': RegExp('^741', 'g') },
    { 'descriptor': 'sandy', 'pattern': RegExp('^751', 'g') },
    { 'descriptor': 'dusty', 'pattern': RegExp('^761', 'g') },
    { 'descriptor': 'volcanic(?!)', 'pattern': RegExp('^762', 'g') },    
    { 'descriptor': 'blustery', 'pattern': RegExp('^771', 'g') },   
    { 'descriptor': 'a tornado(!)', 'pattern': RegExp('^781', 'g') },   
    { 'descriptor': 'cloudy', 'pattern': RegExp('^80', 'g') },
    { 'descriptor': 'clear', 'pattern': RegExp('^800', 'g') }
  ],

  'temperatureRanges': [
    { 'descriptor': 'Freezing', 'maxTemp': -10},
    { 'descriptor': 'Cold', 'maxTemp': 4},
    { 'descriptor': 'Cool', 'maxTemp': 10},
    { 'descriptor': 'Mild', 'maxTemp': 15},
    { 'descriptor': 'Warm', 'maxTemp': 25},
    { 'descriptor': 'Hot', 'maxTemp': 999 },
  ]
}