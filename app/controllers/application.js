import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  rows = [
    { id: 'one', tooltipText: 'Hi, I am tooltip 1' },
    { id: 'two', tooltipText: 'Hi, I am tooltip 2' },
    { id: 'three', tooltipText: 'Hi, I am tooltip 3' }
  ]
}
