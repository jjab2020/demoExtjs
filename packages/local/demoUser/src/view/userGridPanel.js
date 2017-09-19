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
            }, {
                xtype: 'gridcolumn',
                flex: 1,
                dataIndex: 'surname',
                text: 'Surname'
            }, {
                xtype: 'gridcolumn',
                flex: 1,
                dataIndex: 'birth',
                text: 'Birth',
                format: 'Y-m-d',
                renderer: Ext.util.Format.dateRenderer('Y-m-d')
            }]
    },
    dockedItems: [{
        xtype: 'pagingtoolbar',
        bind: {
            store: '{users}'
        },
        dock: 'bottom',
        displayInfo: true,
        displayMsg: 'Displaying {0} - {1} of {2}',
    }]
});
