import { useContext, useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Link, useLocation} from 'react-router-dom';
import Rating from "./Rating";
import BookStoreContext from '../Context/BookStoreContext';

const Details = () => {

    const location = useLocation();  
    const queryparams = new URLSearchParams(location.search); 
    const id = parseInt(queryparams.get('id'));
    
    const {addToCart} = useContext(BookStoreContext);
    const [qty, setQty] = useState(1);

    const books = [
        {
            id: 1,
            price: 27.00,
            rating: 4.8,
            title: "Atomic Habits:Proven Way To Build Good Habits",
            author: "James Clear",
            reviews: "122",
            image: "https://prodimage.images-bn.com/pimages/9780735211292_p0_v30_s1200x1200.jpg",
            printLength: 320,
            language: "English",
            PublicationDate: "16 October 2018",
            description: "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
        },
        {
            id: 2,
            price: 19.00,
            rating: 5,
            title: "1984",
            author: "George Orwell",
            reviews: "338",
            image: "https://prodimage.images-bn.com/pimages/9780452262935_p0_v6_s1200x1200.jpg",
            printLength: 320,
            language: "English",
            PublicationDate: "1 April 1983",
            description: "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching...",
        },
        {
            id: 3,
            price: 34.00,
            rating: 4,
            title: "Ancient Mesopotamia",
            author: "A. Leo Oppenheim",
            reviews: "205",
            image: "https://prodimage.images-bn.com/pimages/9780226631875_p0_v6_s1200x1200.jpg",
            printLength: 462,
            language: "English",
            PublicationDate: "15 September 1977",
            description: "Ancient Mesopotamia-the area now called Iraq-has received less attention than ancient Egypt and other long-extinct and more spectacular civilizations. But numerous small clay tablets buried in the desert soil for thousands of years make it possible for us to know more about the people of ancient Mesopotamia than any other land in the early Near East. Professor Oppenheim, who studied these tablets for more than thirty years, used his intimate knowledge of long-dead languages to put together a distinctively personal picture of the Mesopotamians of some three thousand years ago. Following Oppenheim death. ",
        },
        {
            id: 4,
            price: 16.99,
            rating: 4.5,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            reviews: "154",
            image: "https://prodimage.images-bn.com/pimages/9780060935467_p0_v13_s1200x1200.jpg",
            printLength: 336,
            language: "English",
            PublicationDate: "5 July 2005",
            description: "One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.",
        },
        {
            id: 5,
            price: 9.99,
            rating: 4.2,
            title: "Animal Farm",
            author: "George Orwell",
            reviews: "173",
            image: "https://prodimage.images-bn.com/pimages/9780451526342_p0_v5_s1200x1200.jpg",
            printLength: 176,
            language: "English",
            PublicationDate: "6 April 2004",
            description: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned—a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.",
        },
        {
            id: 6,
            price: 18.99,
            rating: 4.4,
            title: "And Then There Were None",
            author: "Agatha Christie",
            reviews: "342",
            image: "https://prodimage.images-bn.com/pimages/9780062073471_p0_v9_s1200x1200.jpg",
            printLength: 272,
            language: "English",
            PublicationDate: "18 January 2011",
            description: "First, there were ten—a curious assortment of strangers summoned as weekend guests to a private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. One by one they fall prey. Before the weekend is out, there will be none. And only the dead are above suspicion.",
        },
        {
            id: 7,
            price: 16.00,
            rating: 4.3,
            title: "Einstein’s Dreams",
            author: "Alan Lightman ",
            reviews: "145",
            image: "https://prodimage.images-bn.com/pimages/9781400077809_p0_v1_s1200x1200.jpg",
            printLength: 144,
            language: "English",
            PublicationDate: "11 September 2004",
            description: "Einstein’s Dreams is a fictional collage of stories dreamed by Albert Einstein in 1905, about time, relativity and physics. As the defiant but sensitive young genius is creating his theory of relativity, a new conception of time, he imagines many possible worlds. In one, time is circular, so that people are fated to repeat triumphs and failures over and over. In another, there is a place where time stands still, visited by lovers and parents clinging to their children. In another, time is a nightingale, sometimes trapped by a bell jar.",
        },
        {
            id: 8,
            price: 30.00,
            rating: 5,
            title: "Never Split The Difference",
            author: "Chris Voss",
            reviews: "150",
            image: "https://prodimage.images-bn.com/pimages/9780062407801_p0_v3_s1200x1200.jpg",
            printLength: 288,
            language: "English",
            PublicationDate: "23 May 2017",
            description: "Life is a series of negotiations, and negotiation is at the heart of collaboration—whether you are a business executive, a salesperson, a parent , a community leader, or a spouse. As a former FBI hostage negotiator, Chris Voss gives you the tools to be effective in any situation: negotiating a business deal, buying (or selling) a car, negotiating a salary, acquiring a home, renegotiating rent, deliberating with your partner, or communicating with your children. Taking the power of persuasion, empathy, active listening, and intuition to the next level, Never Split the Difference gives you the competitive edge in any difficult conversation or challenging situation. This book is a masterclass in influencing others, no matter the circumstance",
        },
        {
            id: 9,
            price: 16.99,
            rating: 4.6,
            title: "Good Vibes, Good Life",
            author: "Vex King",
            reviews: "114",
            image: "https://prodimage.images-bn.com/pimages/9781788171823_p0_v2_s1200x1200.jpg",
            printLength: 320,
            language: "English",
            PublicationDate: "4 December 2018",
            description: "Instagram guru Vex King “teaches us how self-love is the key to unlocking your inner greatness” (Marie Claire) and shares inspirational quotes and universal wisdom for manifesting positive vibes.",
        },
        {
            id: 10,
            price: 25.00,
            rating: 4.5,
            title: "Beginning Drawing Atelier",
            author: "Juliette Aristides",
            reviews: "161",
            image: "https://prodimage.images-bn.com/pimages/9781580935128_p0_v3_s600x595.jpg",
            printLength: 128,
            language: "English",
            PublicationDate: "16 April 2019",
            description: "In this elegant and inspiring workbook, master contemporary artist and best selling author Juliette Aristides breaks down the drawing process into small, manageable lessons; presents them progressively; introduces time-tested principles and techniques in the Atelier tradition that are easily accessible; and shares the language and context necessary to understand the artistic process and create superior, well-crafted drawings.",
        },
        {
            id: 11,
            price: 21.00,
            rating: 4.8,
            title: "The Women: A Novel",
            author: "Kristin Hannah",
            reviews: "189",
            image: "https://prodimage.images-bn.com/pimages/9781250178633_p0_v3_s1200x1200.jpg",
            printLength: 480,
            language: "English",
            PublicationDate: "6 February 2024",
            description: "The Women is both singular and expansive in focus. Centered on one woman who goes to war in Vietnam, it is a stark reminder of the sacrifices women make for their country.",
        },

        {
            id: 12,
            price: 21.00,
            rating: 4.0,
            title: "You Like It Darker: Stories",
            author: "Stephen King",
            reviews: "130",
            image: "https://prodimage.images-bn.com/pimages/9781668037713_p0_v2_s1200x1200.jpg",
            printLength: 512,
            language: "English",
            PublicationDate: "21 May 2024",
            description: "From legendary storyteller and master of short fiction Stephen King comes an extraordinary new collection of twelve short stories, many never-before-published, and some of his best EVER.",
        },

        {
            id: 13,
            price: 18.00,
            rating: 4,
            title: "Sophie’s World",
            author: "Jostein Gaarder",
            reviews: "55",
            image: "https://prodimage.images-bn.com/pimages/9780374530716_p0_v6_s1200x1200.jpg",
            printLength: 512,
            language: "English",
            PublicationDate: "21 May 2024",
            description: "One day fourteen-year-old Sophie Amundsen comes home from school to find in her mailbox two notes, with one question on each: 'Who are you?' and 'Where does the world come from?' From that irresistible beginning, Sophie becomes obsessed with questions that take her far beyond what she knows of her Norwegian village. Through those letters, she enrolls in a kind of correspondence course, covering Socrates to Sartre, with a mysterious philosopher, while receiving letters addressed to another girl. Who is Hilde? And why does her mail keep turning up? To unravel this riddle, Sophie must use the philosophy she is learning—but the truth turns out to be far more complicated than she could have imagined.",
        },
        {
            id: 14,
            price: 17.00,
            rating: 4.2,
            title: "Norwegian Wood",
            author: "Haruki Murakami",
            reviews: "94",
            image: "https://prodimage.images-bn.com/pimages/9780375704024_p0_v8_s1200x1200.jpg",
            printLength: 320,
            language: "English",
            PublicationDate: "12 September 2000",
            description: "Toru, a serious young college student in Tokyo, is devoted to Naoko, a beautiful and introspective young woman, but their mutual passion is marked by the tragic death of their best friend years before. As Naoko retreats further into her own world, Toru finds himself drawn to a fiercely independent and sexually liberated young woman.",
        },
        {
            id: 15,
            price: 19.99,
            rating: 4.3,
            title: "Pet Sematary",
            author: "Stephen King",
            reviews: "186",
            image: "https://prodimage.images-bn.com/pimages/9780743412285_p0_v12_s1200x1200.jpg",
            printLength: 416,
            language: "English",
            PublicationDate: "1 February 2002",
            description: "When Dr. Louis Creed takes a new job and moves his family to the idyllic rural town of Ludlow, Maine, this new beginning seems too good to be true. Despite Ludlow’s tranquility, an undercurrent of danger exists here. Those trucks on the road outside the Creed’s beautiful old home travel by just a little too quickly, for one thing...as is evidenced by the makeshift graveyard in the nearby woods where generations of children have buried their beloved pets. Then there are the warnings to Louis both real and from the depths of his nightmares that he should not venture beyond the borders of this little graveyard where another burial ground lures with seductive promises and ungodly temptations. A blood-chilling truth is hidden there—one more terrifying than death itself, and hideously more powerful. As Louis is about to discover for himself sometimes, dead is better...",
        },
        {
            id: 16,
            price: 19.99,
            rating: 4.5,
            title: "The Invisible Life of Addie LaRue",
            author: "Victoria E. Schwab",
            reviews: "154",
            image: "https://prodimage.images-bn.com/pimages/9780765387578_p0_v2_s1200x1200.jpg",
            printLength: 448,
            language: "English",
            PublicationDate: "4 April 2023",
            description: "France, 1714: in a moment of desperation, a young woman makes a Faustian bargain to live forever—and is cursed to be forgotten by everyone she meets. Thus begins the extraordinary life of Addie LaRue, and a dazzling adventure that will play out across centuries and continents, across history and art, as a young woman learns how far she will go to leave her mark on the world. But everything changes when, after nearly 300 years, Addie stumbles across a young man in a hidden bookstore and he remembers her name.",
        },
        {
            id: 17,
            price: 18.00,
            rating: 4.4,
            title: "The Midnight Library",
            author: "Matt Haig",
            reviews: "128",
            image: "https://prodimage.images-bn.com/pimages/9780525559498_p0_v2_s1200x1200.jpg",
            printLength: 304,
            language: "English",
            PublicationDate: "9 May 2023",
            description: "Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better?",
        },
        {
            id: 18,
            price: 14.99,
            rating: 4.5,
            title: "The Book Thief",
            author: "Markus Zusak",
            reviews: "608",
            image: "https://prodimage.images-bn.com/pimages/9780375842207_p0_v13_s1200x1200.jpg",
            printLength: 608,
            language: "English",
            PublicationDate: "11 September 2007",
            description: "When Death has a story to tell, you listen. It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will become busier still. Liesel Meminger is a foster girl living outside of Munich, who scratches out a meager existence for herself by stealing when she encounters something she can’t resist–books. With the help of her accordion-playing foster father, she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement.",
        },
        {
            id: 19,
            price: 20.00,
            rating: 4.5,
            title: "Small Things Like These",
            author: "Claire Keegan",
            reviews: "41",
            image: "https://prodimage.images-bn.com/pimages/9780802158741_p0_v5_s1200x1200.jpg",
            printLength: 128,
            language: "English",
            PublicationDate: "11 November 2021",
            description: "Small Things Like These is award-winning author Claire Keegan's landmark new novel, a tale of one man's courage and a remarkable portrait of love and family. It is 1985 in a small Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal merchant and family man faces into his busiest season. Early one morning, while delivering an order to the local convent, Bill makes a discovery which forces him to confront both his past and the complicit silences of a town controlled by the church.",
        },
        {
            id: 20,
            price: 30.00,
            rating: 4.9,
            title: "The Backyard Bird Chronicles",
            author: "Amy Tan, David Allen Sibley",
            reviews: "10",
            image: "https://prodimage.images-bn.com/pimages/9780593536131_p0_v8_s1200x1200.jpg",
            printLength: 320,
            language: "English",
            PublicationDate: "23 April 2024",
            description: "Tracking the natural beauty that surrounds us, The Backyard Bird Chronicles maps the passage of time through daily entries, thoughtful questions, and beautiful original sketches. With boundless charm and wit, author Amy Tan charts her foray into birding and the natural wonders of the world.",
        }

    ]

    const book = books.find(book => book.id === id);

    console.table(books)

    return (
        <>
            <MainLayout>
                <section className="py-5 mt-3">
                    <div className="container px-4 px-lg-5 my-5">

                    <div className="text-end">
                    <Link to="/list" className="btn btn-link" id='backlink' aria-label="Go back to browse books">
                        Back to Browse Books
                        <i className="bi bi-arrow-right mr-2"></i>
                    </Link>
                </div>

                        <div className="row gx-4 gx-lg-5 align-items-start">
                            <div className="col-md-6">
                                <img className="card-img-center mt-4 mb-md-0" id="imgdetail" src={book.image} alt={book.title} />
                            </div>
                            <div className="col-md-6 justify-content-center">
                                <h1 className="book-title mt-5">{book.title}</h1>
                                <div className="book-author">
                                    By: <span>{book.author}</span>
                                </div>
                                <div className="d-flex justify-content-center text-warning mb-2">
                                    <Rating rating={book.rating} reviews={book.reviews} />
                                </div>
                                <p className="book-description text-start">{book.description}</p>
                                <div className='row'>
                                    <div className="book-icons d-flex justify-content-center mt-4">
                                        <div className="book-icon mx-2">
                                            <small>Number of Pages: </small>
                                            <b>{book.printLength}</b>
                                        </div>
                                        <div className="book-icon mx-2">
                                            <small>Language: </small>
                                            <b>{book.language}</b>
                                        </div>
                                        <div className="book-icon mx-2">
                                            <small>Publication Date:</small>
                                            <b>{book.PublicationDate}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mb-3 mt-5">
                            <input className="form-control text-center me-2" id="inputQuantity" type="number" min="1" defaultValue="1" value={qty} onChange={e => setQty(Number(e.target.value))}/>
                            <button className="btn btn-outline-dark flex-shrink-0" onClick={() => addToCart(book,qty)} id="addbutton" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </section>
            </MainLayout >
        </>);
}

export default Details;