
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
                <Outlet />
            </main>
        </div>
    );
}
