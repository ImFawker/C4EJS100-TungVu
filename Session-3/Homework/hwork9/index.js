const colors = ['red', 'gray', 'blue', 'purple', 'cyan']
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4; j++) {
    color(colors[i]);
  	fd(30*(i));
    rt(90);
  }
}