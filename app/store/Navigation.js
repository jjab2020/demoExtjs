/**
 * Created by jabrane.jabri on 9/19/2017.
 */
Ext.define('demo.store.Navigation', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.navigation',

    root: {
        expanded: true,
        children: [{
            text: 'Home',
            iconCls: 'x-fa fa-home',
            type:'home',
            leaf: true
        }, {
            text: 'Users',
            iconCls: 'x-fa fa-user',
            type:'user',
            leaf: true
        }]
    }
});