import angular from 'angular';
import uirouter from 'angular-ui-router';
import youtube from './youtube/youtube.module';

require('./main.scss');
angular.module('app', [
  uirouter,
  'youtube'
]);
