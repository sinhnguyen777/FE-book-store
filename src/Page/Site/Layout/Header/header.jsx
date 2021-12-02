import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../../Assets/Images/logo.png'
import { BarsOutlined, CloseOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import CartHeader from './cartHeader';
import { useForm } from 'react-hook-form';
import prouctApi from '../../../../api/productApi';


const mainNav = [
    {
        display: "Trang chủ",
        path : "/"
    },
    {
        display: "Thông tin",
        path : "/page"
    },
    {
        display: "Sự kiện",
        path : "/event"
    },
    {
        display: "Dịch vụ",
        path : "/option"
    },
    {
        display: "Sách",
        path : "/shop"
    }
]
const Header = () => {

    const forms = useForm();
    
    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    const showSearch = useRef(null)

    const searchToggle = () => showSearch.current.classList.toggle('show')

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const handleSearchName = async (values) => {
        const { search } = values;
        const res = await prouctApi.GetProductsByname(search);
        console.log(res);
    }
    const handleSearchAuthor = async (values) => {
        const { search } = values;
        const res = await prouctApi.GetProductsByauthor(search);
        console.log(res);
    }
    return (
        <header className="header" ref={headerRef}>
            <div className="header_container">
                <div className="header_menu">
                    
                    <div className="header_menu_left">
                        <div className="header_menu_left_logo">
                            <Link to='/'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="header_menu_left_nav" ref={menuLeft}>
                        <div className="header_menu_left_nav_close" onClick={menuToggle}>
                            <CloseOutlined />
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index} className={`header_menu_item
                                    header_menu_left_nav_item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <div className="header_menu_right">
                        <div className="header_menu_item header_menu_right_item" onClick={searchToggle}>
                            <SearchOutlined />
                        </div>
                        <div className="header_menu_item header_menu_right_item" onClick={showDrawer}>
                            <ShoppingOutlined />
                        </div>
                        <div className="header_menu_item header_menu_right_item">
                            <Link to='/login'>
                                <UserOutlined />
                            </Link>
                        </div>
                    </div>

                    <div className="header_menu_mobile-tonggle" onClick={menuToggle}>
                        <BarsOutlined />
                    </div>
                </div>
            </div>
            <div className="header_search" ref={showSearch}>
                <form action="" onSubmit={forms.handleSubmit(handleSearchName)} onSubmit={forms.handleSubmit(handleSearchAuthor)} >
                    <div className="form_holder" >
                        <input type="text" name="search" id="search" autocomplete="off" required className="search_field" placeholder="Search" ref={forms.register} />
                        <button type="submit" className="search_submit search_field">
                            <span className="search_label">GO</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="header_cart">
                <Drawer title="Shopping" placement="right" onClose={onClose} visible={visible}>
                    <CartHeader/>
                </Drawer>
            </div>
        </header>
    )
}

export default Header
