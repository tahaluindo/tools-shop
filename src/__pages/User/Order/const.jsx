import { 
    DateCreated,
    OrderID,
    ItemType,
    ReportState,
    ReportChat,
    LastReply,
    LastUpdated,
    Seller
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
        name: `#`,
        selector: row => `${row.index}`,
        sortable: true,
        center: false,
        width: '5%'
    },
    {
        name: `${DateCreated}`,
        selector: row => row.date_created,
        sortable: true,
        center: false,
        width: '15%'
    },
    {
        name: `${OrderID}`,
        selector: row => row.order_id,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: `${ItemType}`,
        selector: row => row.item_type,
        sortable: true,
        center: false,
        width: '8%'
    },
    {
        name: `${Seller}`,
        selector: row => row.seller,
        sortable: true,
        center: false,
        width: '7%'
    },
    {
        name: `${ReportState}`,
        selector: row => row.report_state,
        sortable: true,
        center: false,
        width: '10%'
    },
    {
        name: `${ReportChat}`,
        selector: row => row.report_chat,
        sortable: true,
        center: false,
        width: '15%'
    },
    {
        name: `${LastReply}`,
        selector: row => row.last_reply,
        sortable: false,
        center: false,
        width: '15%'
    },
    {
        name: `${LastUpdated}`,
        selector: row => row.last_updated,
        sortable: false,
        center: false,
        width: '15%'
    },
];