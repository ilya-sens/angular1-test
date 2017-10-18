import youtubeHtml from './youtube.html';
import _ from 'lodash';

/* @ngInject */
let youtubeComponent = {
  template: youtubeHtml,
  controllerAs: 'youtube',
  controller: function(youtubeService) {
    const vm = this;
    vm.albums = [];
    vm.albumsToSelect = [];
    vm.title = youtubeService.title();
    vm.videoBeingAdded = false;
    vm.selectedAlbum = undefined;

    vm.find = (arr, key) => {
      angular.forEach(arr, (obj) => {
        if (key in obj) {
          vm.albumsToSelect = _.union(vm.albumsToSelect, obj[key]);
        } else {
          return vm.find(arr, obj);
        }
      });
    };
    vm.addVideo = () => {
      vm.entityToCreate = {
        title: '',
        description: '',
        url: '',
      };
      vm.videoBeingAdded = true;
    };
    vm.saveVideo = () => {
      vm.selectedAlbum.videos.push(vm.entityToCreate);
      vm.videoBeingAdded = false;
    };

    youtubeService.loadAll().then((result) => {
      vm.albums = result.data;
      vm.albumsToSelect = _.union(vm.albumsToSelect, vm.albums);
      vm.find(result.data, 'albums');
    }).catch((ignore) => {
      /* ignore this time */
    })
  }

};
export default youtubeComponent;
