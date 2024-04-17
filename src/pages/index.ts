import Routing from './index.vue';

export const routes = [
    {path: '/', component: () => import('./cocktail-list')},
    {path: '/cocktail/:id', component: () => import('./cocktail-details')},
    {path: '/:pathMatch(.*)*', component: () => import('./not-found-page')}
];

export { Routing }