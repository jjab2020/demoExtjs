/**
 * Created by jabrane.jabri on 9/19/2017.
 * The model of users list
 */
Ext.define('userDemo.model.userModel', {
    extend: 'Ext.data.Model',

    fields: [{
        type: 'string',
        name: 'username'
    }, {
        type: 'string',
        name: 'surname'
    }, {
        type: 'date',
        name: 'birth',
        dateFormat: 'Y-m-d'
    }],
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