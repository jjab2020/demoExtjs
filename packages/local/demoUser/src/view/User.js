/**
 * Created by jabrane.jabri on 9/19/2017.
 * the window of users
 */

Ext.define('userDemo.view.User', {
    extend: 'Ext.window.Window',
    xtype: 'userWindow',
    controller: 'user',
    iconCls: 'x-fa fa-user',
    title: 'User List',
    modal: true,
    closable: true,
    resizable: false,
    draggable: false,
    width: 750,
    height: 600,
    minWidth: 450,
    closeOnClickOutSide: false,
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    },
    fixed: true,
    minHeight: 550,
    layout: 'fit',
    items: {
        xtype: 'gridUser',
        itemId: 'myUserGrid'
    }
});