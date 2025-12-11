import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function AppLayout() {
    return (
        <div className="h-screen w-screen flex flex-col overflow-hidden">
            <Header />

            <div className="flex-1 flex overflow-hidden">
                <Sidebar />

                <main className="flex-1 overflow-y-auto p-10">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
