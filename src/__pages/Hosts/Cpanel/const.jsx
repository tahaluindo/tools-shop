export const tableColumns = [
    {
        name: `Country`,
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '15%'
    },
    {
        name: `TLD`,
        selector: row => row.tld,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: `SSL`,
        selector: row => row['ssl'],
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: 'DetectHosting',
        selector: row => row.detect_hosting,
        sortable: true,
        center: false,
        width: '20%'
    },
    {
        name: 'Seller',
        selector: row => row.seller,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: 'Addedon',
        selector: row => row.added_on,
        sortable: true,
        center: false,
        width: '20%'
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
        center: false,
        width: '5%'
    },
    {
        name: 'Action',
        selector: row => row['action'],
        sortable: false,
        center: true,
        width: '10%'
    },
];
