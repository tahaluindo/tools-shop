import { 
    ID,
    Seller,
    Type,
    Item,
    OpenView,
    Price,
    Date,
    Report
} from '../../../Constant';

export const dummytabledata = 
{
    // index: 1,
    // country: <span><i className="flag-icon flag-icon-us"></i>United States</span>,
    // detect_hosting: 'GoDaddy.com, LLC',
    // seller: 'seller20',
    // price: '$ 10',
    // added_on: "2023/04/03 02:14:52 PM",
    // testto: <Btn attrBtn={{size: 'xs', color: 'info'}}><i className='fa fa-paper-plane'></i>{Send}</Btn>,
    // buy: <Btn attrBtn={{size: 'xs'}}><i className='fa fa-shopping-cart'></i>{Buy}</Btn>
};

export const tableColumns = [
    {
        name: `${ID}`,
        selector: row => `${row.index}`,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: `${Type}`,
        selector: row => row.type,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: `${Item}`,
        selector: row => row.item,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: `${OpenView}`,
        selector: row => row.open_view,
        sortable: true,
        center: false,
        width: '20%'
    },
    {
        name: `${Price}`,
        selector: row => row.price,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: `${Seller}`,
        selector: row => row.seller,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: `${Report}`,
        selector: row => row.report,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: `${Date}`,
        selector: row => row.date,
        sortable: false,
        center: false,
        width: '20%'
    },
];