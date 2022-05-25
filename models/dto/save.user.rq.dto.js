const { MakeDto } = require('node-dto')

exports.SaveUserRq = MakeDto([
    {
        name: 'name',
        serialize: 'name',
        required: true,
        type: 'String'
    },
    {
        name: 'wapPhone',
        serialize: 'wap_phone',
        required: true,
        type: 'String'
    },
    {
        name: 'address',
        serialize: 'address',
        required: true,
        type: 'String'
    }
]);