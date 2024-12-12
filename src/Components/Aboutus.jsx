
import MainLayout from '../Layouts/MainLayout'
import aboutImage from '../Assest/aboutus.png'

const Aboutus = () => {
    return (<>
         <MainLayout>
         <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <h2 className="text-start mt-3 mb-2">About Us</h2>
                        <p className='text-start'>
                            Welcome to <strong>Luna's Tales</strong>, your cozy corner for all things books! 
                            At Luna's Tales, we believe in the magic of storytelling and the profound impact that books can have on our lives. 
                            Programmed by a passionate student, our bookstore is not just a place to buy books; 
                            it's a celebration of literature, creativity, and community.
                        </p>
                        
                        <h2 className="text-start mt-4">Our Mission</h2>
                        <p className='text-start'>
                            Our mission is to cultivate a love for reading by providing a carefully curated selection of books 
                            that cater to all tastes and interests. Whether you're searching for the latest bestsellers, 
                            classic literature, or hidden gems, we aim to have something for everyone. 
                            We believe that every book has a story, and we are here to help you discover your next great read.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={aboutImage} alt="Bookshelf" width={350} height={350} />
                </div>
            </div>
            </div>
        </section>
         </MainLayout>
            
    </> );
}
 
export default Aboutus;