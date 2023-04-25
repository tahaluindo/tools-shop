import Table from 'rc-table';

const ReactTable = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '10%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
    },
    {
      title: 'Operations',
      dataIndex: '',
      key: 'operations',
      with: '10%',
      render: () => <a href="#">Delete</a>,
    },
  ];
  
  const data = [
    { name: 'Jack', age: 28, address: 'some where', key: '1' },
    { name: 'Rose', age: 36, address: 'some where', key: '2' },
  ];

  return (
    <Table columns={columns} data={data} />
  )
}

export default ReactTable;
