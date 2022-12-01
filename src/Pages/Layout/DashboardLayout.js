import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Header from '../Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="toggleDashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="toggleDashboard" className="drawer-overlay"></label>
                    <ul className="menu w-80 text-base-content bg-primary p-4 mr-4 rounded-md">
                        {
                            isBuyer && <><li><Link to='/dashboard/orders'>My Orders</Link></li></>
                        }
                        {
                            isSeller && <>
                            <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/myproduct'>My Products</Link></li>
                            <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;