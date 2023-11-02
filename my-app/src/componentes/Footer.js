// import useLocation from 'react-router-dom'; to use location
// it means that if the location is /contact or /about then the footer will be fixed
import { useLocation } from 'react-router-dom';

function Footer() {
    //defining location, that is the method to uselocation()
    const location = useLocation();
    //defining isFixed, that is the condition to fix the footer
    //Location.pathname is the path of the page
    const isFixed = location.pathname === '/contact' || location.pathname === '/about' ||location.pathname === '/protect';

    return (
        //if isFixed is true then add fixed to the className
        //if isFixed is false then add nothing to the className
        <footer className={`${isFixed ? 'fixed' : ''} bottom-0 w-full`}>
            <div className='bg-blue-900 text-white p-2'>
                <div className='flex justify-around gap-2'>
                    <div>
                        <h1 className='text-2xl'>HiStore</h1>
                        <p className="text-1xl">HiStore is a website that sells Websites.</p>
                    </div>
                    <div>
                        <h1 className='text-2xl'>Contact Us</h1>
                        <p className='text-1xl'>Phone: 123456789</p>
                        <p>Email:</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };