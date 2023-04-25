export const tableColumns = [
    {
        name: 'ID',
        selector: row => row.smtpid,
        sortable: true,
        
        width: '5%'
    },
    {
        name: 'Country',
        selector: row => row['country'],
        sortable: false,
        
        width: '10%'
    },
    {
        name: 'Domain',
        selector: row => row.domain,
        sortable: true,
        
        width: '20%'
    },
    {
        name: 'WebMail',
        selector: row => row.webmail,
        sortable: true,
        
        width: '10%'
    },
    {
        name: 'DetectHosting',
        selector: row => row.detect_hosting,
        sortable: true,
        
        width: '15%'
    },
    {
        name: 'Seller',
        selector: row => row.seller,
        sortable: true,
        
        width: '6%'
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
        
        width: '6%'
    },
    {
        name: 'Addedon',
        selector: row => row.added_on,
        sortable: true,
        
        width: '15%'
    },
    {
        name: 'Action',
        selector: row => row['action'],
        sortable: false,
        
        width: '8%'
    },
];