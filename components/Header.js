import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';


export default () => {
    return (
        <Menu inverted style={{ marginTop: '10px' }}>
            <Link route="/">
                <a className="item">
                Quick Ride
                </a>
            </Link>

            <Menu.Menu position="right">
            <Link route="/">
                <a className="item">
                Available Cars
                </a>
            </Link>
            <Link route="/campaigns/new">
                <a className="item">
                +
                </a>
            </Link>
            </Menu.Menu>
        </Menu>
    );
};
