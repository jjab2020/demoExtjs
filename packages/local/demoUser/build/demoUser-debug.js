/**
 * Created by jabrane.jabri on 9/19/2017.
 */
Ext.define('userDemo.model.userModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            type: 'string',
            name: 'username'
        },
        {
            type: 'string',
            name: 'surname'
        },
        {
            type: 'date',
            name: 'birth',
            dateFormat: 'Y-m-d'
        }
    ],
    proxy: {
        type: 'ajax',
        url: 'app/data.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            rootProperty: 'data',
            allowSingle: false
        }
    }
});

/**
 * Created by jabrane.jabri on 9/19/2017.
 */
Ext.define('userDemo.panel.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'demouser-panel',
    title: "My Default Panel"
});

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
    initComponent: function() {
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

/**
 * Created by jabrane.jabri on 9/19/2017.
 * the controller of user view
 */
Ext.define('userDemo.view.userController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user'
});

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

/**
 * Created by jabrane.jabri on 9/19/2017.
 * The list of users
 */
Ext.define('userDemo.view.userGridPanel', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridUser',
    requires: [
        'userDemo.view.userViewModel'
    ],
    viewModel: {
        type: 'userModel'
    },
    bind: {
        store: '{users}'
    },
    pageSize: 10,
    columns: {
        items: [
            {
                xtype: 'gridcolumn',
                dataIndex: 'username',
                text: 'name'
            },
            {
                xtype: 'gridcolumn',
                flex: 1,
                dataIndex: 'surname',
                text: 'Surname'
            },
            {
                xtype: 'gridcolumn',
                flex: 1,
                dataIndex: 'birth',
                text: 'Birth',
                format: 'Y-m-d',
                renderer: Ext.util.Format.dateRenderer('Y-m-d')
            }
        ]
    },
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            bind: {
                store: '{users}'
            },
            dock: 'bottom',
            displayInfo: true,
            displayMsg: 'Displaying {0} - {1} of {2}'
        }
    ]
});

