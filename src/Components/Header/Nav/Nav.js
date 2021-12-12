import React, {useEffect, useState} from 'react';
import {Nav, NavDropdown} from "react-bootstrap";
import axios from "axios";
import OverlayLoading from "../../loading/OverlayLoading";
import './Nav.scss'
import {Link} from "react-router-dom";

const Nav_Menu = (props) => {

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
        <Nav activeKey="/home" className={'justify-content-evenly bg-light py-3'}>
            {
                menuItems.map((item, index) => {
                        return (
                            <Nav.Item>
                                <NavDropdown title={item.title} id={"basic-nav-" + index}>
                                    {
                                        item.services.map(item => {
                                            return (
                                                <Link to={'Details/' + item['slug']}><a className={'dropdown-item'}
                                                > {item.title}
                                                </a>
                                                </Link>
                                            )
                                        })
                                    }
                                </NavDropdown>
                            </Nav.Item>
                        )
                    }
                )
            }
            <OverlayLoading show={loading}/>
        </Nav>
    );
};

export default Nav_Menu;
