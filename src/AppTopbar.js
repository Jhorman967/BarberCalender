import React  from 'react';
import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import classNames from 'classnames';

import {useHistory} from 'react-router-dom';
import { useAuth } from './components/Context/autContext';

export const AppTopbar = (props) => {

    const {user, logout, loading} = useAuth(); 
    const navigate = useHistory();

    const handleLogout = async () => {
        await logout();
        navigate.push('/login#');
      
    };

    const nestedMenuitems = [
       
       
        {
            label: 'Mensajes',
            icon: 'pi pi-fw pi-envelope',
            items: [
                {
                    label: 'Tracker',
                    icon: 'pi pi-fw pi-compass'

                },
                {
                    label: 'Map',
                    icon: 'pi pi-fw pi-map-marker'

                },
                {
                    label: 'Manage',
                    icon: 'pi pi-fw pi-pencil'
                }
            ]
        },
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    
                },
                {
                    label: 'Billing',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-sign-out',
            command:(onClick)=>{
                handleLogout();

            }
        }
    ];

  

    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo-dark.svg' : 'assets/layout/images/logo-white.svg'} alt="logo"/>
                <span>Barbershop</span>
            </Link>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>
            <Menubar model={nestedMenuitems} ></Menubar>
                
        </div>
    );
}

// <ul className={classNames("layout-topbar-menu lg:flex origin-top", {'layout-topbar-menu-mobile-active': props.mobileTopbarMenuActive })}>
//                     <li>
                   
//                         <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
//                             <i className="pi pi-calendar"/>
//                             <span>Events</span>
//                         </button>
//                     </li>
//                     <li>
//                         <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
//                             <i className="pi pi-cog"/>
//                             <span>Settings</span>
//                         </button>
//                     </li>
//                     <li>
//                         <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
//                             <i className="pi pi-user"/>
//                             <span>Profile</span>
//                         </button>
//                     </li>
//                 </ul>