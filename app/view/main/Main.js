/**
 * Created by jabrane.jabri on 9/19/2017.
 * The main View that contain the treeList
 */
Ext.define('demo.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'demo.view.main.MainController'
    ],
    controller: 'main',
    layout: 'fit',
   items: [{

        xtype: 'panel',
        height: 200,
        flex: 1,
        name: 'myList',
        title: "My TreeList",
        items: [
            {
                xtype: 'navigation'
            }

        ]
    }]
});