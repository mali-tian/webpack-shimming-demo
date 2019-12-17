import { file, parse } from './globals';

function component() {
  const element = document.createElement('dev');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  console.log(file);
  parse();

  return element;
}

document.body.appendChild(component());
