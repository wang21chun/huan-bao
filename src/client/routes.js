const Index = resolve => {
    require.ensure(['./index.vue'], () => {
        resolve(require('./index.vue'));
    });
};

const IndexPageHeader = resolve => {
    require.ensure(['./index_page_header.vue'], () => {
        resolve(require('./index_page_header.vue'));
    });
};

const List = resolve => {
    require.ensure(['./list.vue'], () => {
        resolve(require('./list.vue'));
    });
};

const routers = [{
    path: '/',
    component: Index,
    children: [{
        path: '',
        component: IndexPageHeader
    }, {
        path: '/list',
        component: List
    }]
}];

module.exports = routers;
