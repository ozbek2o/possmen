
import {Button,} from "antd";
import {ClearOutlined,PlusCircleOutlined,MinusCircleOutlined}from "@ant-design/icons"
const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
       <h2 className="bg-blue-400 text-center py-4
       text-white font-bold tracking-wide">Sepeteki Ürünler</h2>
       <ul className="cart-items px-2 flex flex-col gap-y-3">
        <li className="cart-item flex justify-between overflow-y-auto py-2">
            <div className="flex items-center">
                <img src="https://i.nefisyemektarifleri.com/2023/08/31/kahve-cesitleri-nelerdir-turk-ve-dunya-kahveleri-resimli-listesi.jpg" alt=""
                className="w-16 h-16 object-cover pt-2" />
                <div className="flex flex-col ml-2">
                    <b>Kahve</b>
                    <span>50₺x2</span>
                </div>
            </div>
            <div className="flex items-center gap-x-2">
            <Button type="primary" size="small" className="w-full  flex items-center justify-center bg-blue-500 !rounded-full"
            icon={ <PlusCircleOutlined />} ></Button>
            <span className="font-bold">2</span>
            <Button type="primary" size="small" className="w-full  flex items-center justify-center bg-blue-500 !rounded-full"
            icon={ <MinusCircleOutlined />} ></Button>
            </div>
        </li>
        <li className="cart-item flex justify-between">
            <div className="flex items-center">
                <img src="https://i.nefisyemektarifleri.com/2023/08/31/kahve-cesitleri-nelerdir-turk-ve-dunya-kahveleri-resimli-listesi.jpg" alt=""
                className="w-16 h-16 object-cover pt-2" />
                <div className="flex flex-col ml-2">
                    <b>Kahve</b>
                    <span>50₺x2</span>
                </div>
            </div>
            <div className="flex items-center gap-x-2">
            <Button type="primary" size="small" className="w-full  flex items-center justify-center bg-blue-500 !rounded-full"
            icon={ <PlusCircleOutlined />} ></Button>
            <span className="font-bold">2</span>
            <Button type="primary" size="small" className="w-full  flex items-center justify-center bg-blue-500 !rounded-full"
            icon={ <MinusCircleOutlined />} ></Button>
            </div>
        </li>
        <li className="cart-item flex justify-between">
            <div className="flex items-center">
                <img src="https://i.nefisyemektarifleri.com/2023/08/31/kahve-cesitleri-nelerdir-turk-ve-dunya-kahveleri-resimli-listesi.jpg" alt=""
                className="w-16 h-16 object-cover pt-2" />
                <div className="flex flex-col ml-2">
                    <b>Kahve</b>
                    <span>50₺x2</span>
                </div>
            </div>
            <div className="flex items-center gap-x-2">
            <Button type="primary" size="small" className="w-full  flex items-center justify-center bg-blue-500 !rounded-full"
            icon={ <PlusCircleOutlined />} ></Button>
            <span className="font-bold">2</span>
            <Button type="primary" size="small" className="w-full  flex items-center justify-center bg-blue-500 !rounded-full"
            icon={ <MinusCircleOutlined />} ></Button>
            </div>
        </li>
       </ul>
       <div className="cart-totals mt-auto">
        <div className="border-t border-b"> 
            <div className="flex justify-between px-2">
                <b>Ara Toplam</b>
                <span>100₺</span>
            </div>
            <div className="flex justify-between px-2">
                <b>KDV%8</b>
                <span className="text-red-500">+7,92₺</span>
            </div>
            
        </div>
        <div className="border-b mt-4 "> 
            <div className="flex justify-between px-2">
                <b className="text-xl text-green-500">Genel Toplam</b>
                <span className="text-xl">100₺</span>
            </div> 
        </div>

        <div className="py-4 "> 
            <Button type="primary" size="large" className="w-full bg-blue-700">Sipariş Oluştur</Button>
            <Button type="primary" size="large" className="w-full mt-2 flex items-center justify-center bg-red-600"
            icon={ <ClearOutlined />} >Temizle</Button>
        </div>
       </div>
    </div>
  )
}

export default CartTotals