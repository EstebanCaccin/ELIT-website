import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserMenu from '../../components/UserMenu/UserMenu';
import UserInfo from '../../components/UserInfo/UserInfo';
import Summary from '../../components/Summary/Summary';
import Activity from '../../components/Activity/Activity';

const user = {
  name: 'Nicole Doe',
  location: 'Córdoba',
  role: 'Vendedor'
};

export default function Example() {
  return (
    <div className="relative h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto focus:outline-none">
        <UserMenu name={user.name}/>
        <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
          <UserInfo name={user.name} location={user.location} role={user.role}/>
          <div className="mt-8">
            <Summary />
            <Activity />
          </div>
        </main>
      </div>
    </div>
  );
}
