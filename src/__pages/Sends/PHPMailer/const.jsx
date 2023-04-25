export const tableColumns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: 'Country',
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'DetectHosting',
        selector: row => row.detect_hosting,
        sortable: true,
        center: false,
        width: '25%'
    },
    {
        name: 'Seller',
        selector: row => row.seller,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: 'Added on',
        selector: row => row.added_on,
        sortable: true,
        center: false,
        width: '20%'
    },
    {
        name: 'Action',
        selector: row => row['action'],
        sortable: true,
        center: false,
        width: '15%'
    }
];