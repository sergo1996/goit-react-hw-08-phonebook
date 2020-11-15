const {lazy } = require("react")

export default [

    {
        path:'/register',
        label: 'Register',
        exact: true,
        restricted: true,
        private:false,
        component: lazy(() => import('./views/RegisterView')), 
    },
    {
        path:'/login',
        label: 'Login',
        exact: true,
        restricted: true,
        private:false,
        component: lazy(() => import('./views/LoginView'))
    },
    {
        path:'/contacts',
        label: 'Contacts',
        exact: true,
        restricted: false,
        private:true,
        component: lazy(() => import('./views/ContactsView.js'))
    },    
]
