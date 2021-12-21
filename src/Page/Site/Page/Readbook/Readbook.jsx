import React, { useEffect, useState } from 'react'
import { BannerProduct } from '../../Components/Common/Banner/banner'
import { BackTop, Select } from 'antd';
import ChapterApi from '../../../../api/chapterApi';
import { useRouteMatch } from 'react-router';
import { LoadingOutlined, UpOutlined } from '@ant-design/icons';
import prouctApi from '../../../../api/productApi';
import GoToTop from '../../Components/Common/GoToTop';


const { Option } = Select;

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#d14031',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};

  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
const Readbook = () => {
    const match = useRouteMatch();
    const [chapter, setChapter] = useState();
    const [valueChapter, setvalueChapter] = useState();
    const [ContentChapter, setContentChapter] = useState()
    const [productValue, setproductValue] = useState()
    const [StatusBook, setStatusBook] = useState(false)
    useEffect(() => {
        const idProduct = match.params.id;
        const fetchCataByID = async () => {
            const res = await ChapterApi.GetChapterByIdProduct(idProduct)
            if(res.data[0] != undefined){
                console.log(1);
                setStatusBook(true)
            }
             setChapter(res.data);
             if(!valueChapter){
                setContentChapter(res.data[0])
             }else{
                const data =res.data.filter(item=>item._id === valueChapter);
                setContentChapter(data[0]);
             }
        }

        fetchCataByID(idProduct)

        const fetchProduct = async () => {
            const res  = await prouctApi.GetProductsById(idProduct)
            setproductValue(res.data)
        }
        fetchProduct()

    }, [valueChapter])

    const handleChange =(value) => {
        setvalueChapter(value)
    }
    
    return (
       <>
            <BannerProduct>
                <h2>Đọc sách</h2>
            </BannerProduct>
            {
                StatusBook
                ?
                <div className="layout">
                <div className="chapter-title">
                    <div className="chapter-title_name">
                        {
                            productValue ?
                            productValue.nameProduct
                            : <LoadingOutlined />
                        
                        }
                    </div>
                    <div className="chapter-title_chapter">
                        {
                            chapter
                            ?
                            <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Chọn chương"
                            optionFilterProp="children"
                            defaultValue={chapter[0]._id}
                            onChange={handleChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {   chapter ?
                                chapter.map((item, index) => (
                                    <>
                                        <Option  key={item._id} value={item._id}>{item.stt}</Option>
                                    </>
                                )) : <LoadingOutlined/>
                            }
                        </Select>
                            :
                            null
                        }
                    </div>
                </div>
                <div className="chapter-content">
                    {
                        ContentChapter
                        ?
                            <>
                                <h2>{ContentChapter.nameChapter}</h2>
                                <div dangerouslySetInnerHTML={{ __html: ContentChapter.content }} />
                            </>
                        :
                        null

                    }
                   
                </div>
            </div>
                :
                `Đang Cập Nhật`
            }
            <BackTop>
                <div style={style}><UpOutlined /></div>
            </BackTop>
            <GoToTop />
       </>
    )
}

export default Readbook
