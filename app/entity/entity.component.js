import entityHtml from './entity.html';

/* @ngInject */
let entityComponent = {
  template: entityHtml,
  controllerAs: 'entity',
  bindings: {
    entity: '<',
  },
  controller: function ($scope) {
    const vm = this;
  }

};
export default entityComponent;
