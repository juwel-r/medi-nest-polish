// Requirements:



//✔👍 Navbar: Follow the following 5 points.

// ✔👍-The background color of the Navbar must be relevant to the primary/secondary color or any relevant color of the website (Assignment 12)

//✔👍 -The background must take up the full width of the screen, regardless of size.   

//✔👍 -But the navbar content should be horizontally padded on both sides, and aligned with the rest of the page content for a consistent layout.

//✔👍 -Except logged in/logged out/register routes, navbar should contain 3 routes while the user is logged out and 5 for the logged in users. And after successful login, all the protected routes must be added to the Navbar or in a dropdown.

// ✔👍-Navbar must be sticky or fixed to the top of the page while scrolling, and it must take up the whole width of the viewport as well.



// Home Page: Follow the following 3 points.

// ✔👍 -The hero section should be clean and meaningful. If a slider is used, then all the images must be of the same ratio. Also the image quality should be good enough to not get pixelated on larger displays. 

// ✔👍 -The height and width of each card in a section must be of the same size. The number of cards in each row should be well thought out and should look good. Each card should have a title, image, short description, “See more” button.

//✔👍 -The landing page should have at least 10 relevant sections including Navbar and Footer. For example: Featured products, recent products, sales promotion, reviews, newsletter etc.



// ✔👍 All Products Page: Follow the following 2 points

// ✔👍 -In the All products page, all cards should be of the same size, well proportioned and there should have two sorting functionality (Example: Sort by ascending price, descending price)for displaying the products.

// -Dashboard( Both user and Admin) : For dashboard, follow the following 2 points.

// --A well designed “Profile Page” must be added to the dashboard, where all the relevant information about the user like Image, Name, Email, Phone number, Address and others should be displayed.

// --An overview page must be added to the dashboard which will showcase overall stats. Charts and graphical elements should be added there.r



// Others: Follow the following 11 points

//✔👍 -Every page should be completed. No half-baked components should be there. The entire project must not have any “Demo Text” or “Lorem” text.

//✔👍 -The entire project must be responsive for Mobile, Tablet and Desktop.

//✔👍 -The spacing between each section of the UI must be uniform.

// ✔👍 -Contents of the whole website should be horizontally padded from both sides, and aligned.

// -The website must handle the user's system’s dark and light mode well. There should not be any text visibility issue or inconsistency due to the system’s setting.

// -In dark mode, background color and text color should not conflict with each other.

//✔👍 -No “Unclickable” button/route/link should be present in the project.

//✔👍 -The error page should be professional in design and should have a button to navigate to the home page.

//✔👍 -Maximum 4 colors can be used in the entire project. 3 is preferred, but maximum 4 will be accepted.

//✔👍 -All the cards should have the same border radius and be of the same size.

//✔👍 -Maximum 2 types of button can be used in the application. It can be buttons with outline or buttons with fill color. But they must be used uniformly.

// --Exception: You don’t have to worry about buttons in the sliders or carousels. They can be a bit different. But the color accent or style must not be irrelevant to the overall design of the UI.



// Reasons for disqualification:

// -If the github repository link provided is not public.

// -If copying is detected.



// Submission Guidelines: Follow the following 4 points.

// -Need to submit a workable live link of the project.

// -You need to submit public GitHub repository links for both the frontend and backend. ( You will be given 0, if you submit private repository links) 

// -Submit your default User & Admin credentials. (if you have any, otherwise you can skip this part)

// -Need to have at least 7 new commits in the project while upgrading the project.




import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingSpin from "../../components/LoadingSpin";
import { Fade } from "react-awesome-reveal";

const PartnerWithUs = () => {
  const [sellers, setSellers] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic("/payment/top-seller").then((res) => setSellers(res.data));
  }, []);

  if (!sellers || !sellers.length > 0) {
    return <LoadingSpin />;
  }
  return (
    <div className="pt-4 md:pt-6 lg:pt-12 mt-4 md:mt-6 lg:mt-12 bg-gradient-to-b from-[#F8FAFF] dark:bg-gradient-to-b via-dark-bg from-dark-bg to-primary/50 flex flex-col items-center overflow-hidden">
      {/* Header Section */}
      <div className="text-center max-w-2xl mb-8">
        <Fade triggerOnce direction="up">
          <h1 className="text-4xl font-bold text-primary">Our Partners</h1>
        </Fade>
        <Fade triggerOnce delay={250}>
          <p className="text-gray-600 dark:text-dark-text mt-4 leading-relaxed">
            At <span className="font-semibold text-primary">Medi Nest</span>,
            we’re revolutionizing the future of healthcare accessibility and
            collaboration. Whether you're a pharmaceutical company, distributor,
            or a healthcare innovator, let's work together to create a healthier
            tomorrow. Join us in building a platform that prioritizes trust,
            quality, and excellence in medicine.
          </p>
        </Fade>
        <Fade triggerOnce direction="up">
          <button className="mt-6 px-8 py-3 text-primary font-bold border border-primary rounded-lg shadow-lg hover:bg-primary hover:text-white transition-colors duration-300 dark:text-dark-text">
            <a href="#contact">Start Your Partnership</a>
          </button>
        </Fade>
      </div>

      <div className="relative w-full  lg:h-[200px] flex flex-col md:flex-row justify-center items-center gap-y-10 min-h-[320px] md:mb-12 lg:mt-8 pb-16 lg:pb-0">
        {sellers.map((seller, index) => (
          <div
            key={index}
            className={`md:absolute border-2 border-white/30 p-1.5 rounded-xl shadow-xl  transform  ${
              index === 0
                ? "rotate-6 lg:translate-y-6 md:top-0 md:-translate-x-[200px] lg:-translate-x-[500px] before:content-['1st_Place'] before:absolute before:top-0 before:text-gray-400 before:right-0 before:pr-4 before:pt-3"
                : index === 1
                ? "-rotate-6 translate-y-2 md:-translate-y-2 md:top-0 md:translate-x-[180px] lg:-translate-x-[160px] before:content-['2nd_Place'] before:absolute before:top-0 before:text-gray-400 before:right-0 before:pr-4 before:pt-3"
                : index === 2
                ? "lg:rotate-6 md:-rotate-3 md:translate-y-6 lg:-translate-y-16 md:bottom-0 md:-translate-x-[180px] lg:translate-x-[180px] before:content-['3rd_Place'] before:absolute before:top-0 before:text-gray-400 before:right-0 before:pr-4 before:pt-3"
                : "rotate-12 md:-rotate-12 lg:-rotate-12 translate-y-2  md:translate-y-32 lg:-translate-y-6 md:translate-x-[200px] lg:translate-x-[500px] text-right before:content-['4th_Place'] before:absolute before:top-0 before:text-gray-400 before:right-0 before:pr-4 before:pt-3"
            }`}
          >
            <div className="bg-white/10 p-4 rounded-lg shadow-lg dark:bg-dark-card dark:border-dark-border ">
              <Fade triggerOnce delay={index * 200} className="">
                <div className="flex items-end justify-between">
                  <img
                    className="w-auto h-12 rounded-md"
                    src={seller.image}
                    alt={seller.name}
                  />
                  <p className=" font-semibold text-gray-600 dark:text-dark-title">{seller.name}</p>
                </div>
                <p className="mt-2 text-gray-800 dark:text-dark-text">
                  # {seller.count} Medicines Available Now
                </p>
                <p className={`text-gray-600 dark:text-dark-text/70 mt-1 ${index === 2 && "hidden"}`}>
                  Our Special Partner
                </p>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerWithUs;
