function component() {
  const element = document.createElement('dev');

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  
  this.alert('Hmmm, this probably isn\'t a great idea...')

  return element;
}

document.body.appendChild(component());
