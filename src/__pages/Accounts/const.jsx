export const tableColumns = [
    {
        name: "Country",
        selector: row => row['country'],
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: "SiteName",
        selector: row => row.site_name,
        sortable: true,
        center: false,
        width: '20%'
    },
    {
        name: "AvailableInformation",
        selector: row => row.information,
        sortable: true,
        center: false,
        width: '30%'
    },
    {
        name: "Seller",
        selector: row => row.seller,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: "Price",
        selector: row => row.price,
        sortable: true,
        center: false,
        width: '5%'
    },
    {
        name: "Addedon",
        selector: row => row.added_on,
        sortable: true,
        center: false,
        width: '15%'
    },
    {
        name: "Action",
        selector: row => row['action'],
        sortable: false,
        center: true,
        width: '10%'
    },
];