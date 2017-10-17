import angular from 'angular';
import uirouter from 'angular-ui-router';
import youtube from './youtube/youtube.module';
import album from './album/album.module';
import entity from './entity/entity.module';

require('./main.scss');
angular.module('app', [
  uirouter,
  'youtube',
  'album',
  'entity'
]);
