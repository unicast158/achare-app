import React, {useEffect, useState} from 'react';
import {Nav} from "react-bootstrap";
import axios from "axios";
import OverlayLoading from "../../loading/OverlayLoading";

const Nav_Menu = () => {

    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState()

    useEffect(() => {
        // Simple GET request using axios
        setLoading(true)
        axios.get('https://api.achareh.ir/v2/listings/categories/limited-services/?limit=9&city=333')
            .then(response => {
                // let {data} = response;
                setLoading(false)
                setMenuItems(response.data);
            }).catch(err => {
            setLoading(false)
            alert(err.message)
        })
    }, [])


    return (
        <Nav activeKey="/home" className={'bg-light py-3'} onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                {
                    menuItems.map((item, index) => {
                            return (<Nav.Link key={index} href="/home" className={'link-dark'}>{item.title}</Nav.Link>)
                        }
                    )
                }
            </Nav.Item>
            <OverlayLoading show={loading}/>
        </Nav>
    );
};

export default Nav_Menu;
