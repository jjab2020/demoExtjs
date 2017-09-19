/**
 * Created by jabrane.jabri on 9/19/2017.
 * The treelist view
 */
Ext.define('demo.view.navigation.Main', {
    extend: 'Ext.list.Tree',
    xtype: 'navigation',

    requires: [
        'demo.view.navigation.MainController',
        'demo.view.navigation.MainModel',
        'demo.store.Navigation'
    ],
    store: {
        type: 'navigation'
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    }
});