import item01 from '../img/banner-1.jpg';
import item02 from '../img/banner-10.jpg';
import item03 from '../img/background.jpg';
import ButtonForMore from './ButtonForMore';

const products = [
    {
        id: 1,
        name: 'eCommerce webpage (Simple)',
        description: 'eCommerce webpage with main page, cart-bar and products.',
        image: item01,
        
      },
      {
        
        id: 2,
        name: 'eCommerce webpage with contact form',
        description: 'eCommerce webpage using TailwindCSS and React with home page, products page, contact form page and cart bar.',
        image: item02,
      },
      {
        
        id: 3,
        name: 'eCommerce webpage ',
        description: 'eCommerce webpage using TailwindCSS and React with home page, products page, contact form page, slides and animations and cart bar.',
        image: item03,
      }
]

function ProductsList(){
    return(
        <>

            <div className='product-container  flex space-x-10 m-10 border border-gray-500 p-9'>

             {/* Mapping over products array to create product cards */}
                {products.map((product) => (
                    <div className='product-holder hover:shadow-custom-color border border-gray-500 p-8 w-full ' key={product.id}>
                    <div className='product text-white'>
                        <img className='w-full h-50' src={product.image} alt='product' />
                        <h2 className='p-2 mb-1'>{product.name}</h2>
                        <p>{product.description}
                            {/* ButtonForMore component with onClick event */}
                        
                        </p>
                        <ButtonForMore className='pt-5 pl-2' text= 'more' to='model1'/>
                    </div>
                    </div> 
                ))} 
            </div>
        </>
    )
}

export { ProductsList };
