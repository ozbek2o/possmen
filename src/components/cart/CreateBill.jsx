import {Modal,Form,Input, Select,Button,Card,} from 'antd'

const CreateBill = ({isModalOpen, setIsModalOpen}) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return (
   <Modal
    title="Fatura Oluştur" 
    open={isModalOpen} 
    footer={false}
    onCancel={()=>setIsModalOpen(false)} 

    >
    <Form layout='vertical'     onFinish={onFinish}>
        <Form.Item label="Müşteri Adı ve Soyadı"
        name={"customerName"}
        rules={[{ required: true, message: 'Müşteri Adı ve Soyadı Alanı Boş Geçilemez!' }]}>
        <Input placeholder="Bir Müşteri Adı ve Soyadı Yazınız" />
        </Form.Item>
        <Form.Item label="Tel No"
         name={"phoneNumber"}
         rules={[{ required: true, message: 'Telofon Numara Alanı Boş Geçilemez!' }]}>
        <Input placeholder="Bir Telefon Numarası Yazınız"  maxLength={11}/>
        </Form.Item>
        <Form.Item label="Ödeme Yöntemi"
         name={"paymentMode"}
         rules={[{ required: true, message: 'Ödeme Yöntemi Alanı Boş Geçilemez!' }]}>
        <Select placeholder="Ödeme Yöntemi Seçiniz">
          <Select.Option value="Nakit">Nakit</Select.Option>
          <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
        </Select>
        </Form.Item>
        
        <Card >
            <div className="flex justify-between">
          <span>Ara Toplam</span>
          <span>549.00₺</span>
          </div>
          <div className="flex justify-between my-2">
          <span>KDV Toplam %8</span>
          <span className="text-red-600">43.00₺</span>
          </div>
          <div className="flex justify-between">
          <b>Toplam</b>
          <span>592.00₺</span>
          </div>  
          <div className='flex justify-end'>
          <Button className="bg-blue-700 text-white mt-4 "  type="primary" onClick={()=>setIsModalOpen(true)} htmlType='submit'>Sipariş Oluştur</Button>
          </div>  
    </Card>    
    </Form>
  </Modal>
  )
}

export default CreateBill