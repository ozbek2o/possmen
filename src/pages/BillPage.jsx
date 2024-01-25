import Header from "../components/header/Header";
import{useState} from "react";
import {Table,Card,Button,} from "antd";
import PrintBills from "../components/bills/PrintBills";
const BillPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
  return (
    <div>
        <>
        <Header />
        <div className="px-6">
          <h1 className="text-4xl font-bold text-center mb-4">Faturalar</h1>
        <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>
        <div className="cart-total flex justify-end mt-4">
        <Card className="w-72">
        
          <Button className="bg-blue-700 text-white mt-4 w-full" size="large" type="primary" onClick={()=>setIsModalOpen(true)}>
            YAZDIR
          </Button>
    </Card>
        </div>
        </div>
        <PrintBills isModalOpen={isModalOpen}
         setIsModalOpen={setIsModalOpen}/>
        </>
      
    </div>
  );
};

export default BillPage;