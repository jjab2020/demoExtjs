/**
 * Created by jabrane.jabri on 9/19/2017.
 * user viewModel
 */
Ext.define('userDemo.view.userViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userModel',

    requires: [
        'userDemo.model.userModel'
    ],

    stores: {
        users: {
            autoLoad: true,
            model: 'userDemo.model.userModel'
        }
    }
});