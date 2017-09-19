/**
 * Created by jabrane.jabri on 9/19/2017.
 *  The controller of MainView
 */
Ext.define('demo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    // handle the click of node treeItem to show the window list of users

    onSelectionChange: function (tree, node) {
        if (node.get('type') === 'user') {
            Ext.create({
                xtype: 'userWindow'
            }).show();
        }
        else {
            console.log('the home page was selected or another page else user ');
        }
    }
});