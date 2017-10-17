import angular from 'angular';
import routing from './youtube.route';
import component from './youtube.component';
import service from './youtube.service';
/* @ngInject */
angular
  .module('youtube', [])
  .component('youtube', component)
  .factory('youtubeService', service)
  .config(routing);
