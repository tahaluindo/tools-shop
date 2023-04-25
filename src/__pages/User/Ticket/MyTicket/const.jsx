import { 
    ID,
    DateCreated,
    Title,
    Conversion,
    Status,
    LastReply,
    LastUpdated
} from '../../../../Constant';

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
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${DateCreated}`,
        selector: row => row.date_created,
        sortable: false,
        center: false,
        width: '20%'
    },
    {
        name: `${Title}`,
        selector: row => row.title,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${Conversion}`,
        selector: row => row.conversion,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${Status}`,
        selector: row => row.status,
        sortable: false,
        center: false,
        width: '10%'
    },
    {
        name: `${LastReply}`,
        selector: row => row.last_reply,
        sortable: false,
        center: false,
        width: '20%'
    },
    {
        name: `${LastUpdated}`,
        selector: row => row.last_updated,
        sortable: false,
        center: false,
        width: '20%'
    },
];