import entityHtml from './entity.html';

/* @ngInject */
let entityComponent = {
  template: entityHtml,
  controllerAs: 'entity',
  bindings: {
    entity: '<',
  },
  controller: function ($scope, $sce) {
    const vm = this;
    vm.entity = {
      title: '',
      description: '',
      url: '',
    };
    vm.getUrl = () => {
      return $sce.trustAsResourceUrl(vm.entity.url);
    }
  }

};
export default entityComponent;
