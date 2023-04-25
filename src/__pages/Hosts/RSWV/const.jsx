export const tableColumns = [
    {
        name: 'Country',
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: 'Login',
        selector: row => `${row.login}`,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: 'Information',
        selector: row => `${row.information}`,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: 'RAM',
        selector: row => `${row.ram}`,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: 'Detect Hosting',
        selector: row => row.detect_hosting,
        sortable: true,
        center: false,
        width: '13%'
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
        width: '7%'
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
        sortable: false,
        center: true,
        width: '10%'
    },
];