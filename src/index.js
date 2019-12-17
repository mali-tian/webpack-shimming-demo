import _ from 'lodash';

function component() {
  const element = document.createElement('dev');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
