import { BsCalendarDate } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader";
import { GiMedicines } from "react-icons/gi";

const CustomerTestimonials = () => {
  const customers = [
    {
      id: 1,
      name: "Sarah Rahman",
      location: "Dhaka, Bangladesh",
      medicinePurchased: "Paracetamol 500mg",
      purchaseDate: "2025-02-10",
      review:
        "Great service! Fast delivery and authentic medicines. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Ahmed Kabir",
      location: "Chattogram, Bangladesh",
      medicinePurchased: "Aspirin 75mg",
      purchaseDate: "2025-02-08",
      review: "Affordable price and excellent packaging. Will order again!",
      rating: 4,
    },
    {
      id: 3,
      name: "Rina Akter",
      location: "Rajshahi, Bangladesh",
      medicinePurchased: "Omeprazole 20mg",
      purchaseDate: "2025-02-06",
      review:
        "Customer support was very helpful in guiding me to the right medicine.",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Tanvir Hasan",
      location: "Sylhet, Bangladesh",
      medicinePurchased: "Metformin 500mg",
      purchaseDate: "2025-02-05",
      review:
        "Genuine medicine and timely delivery. I trust Medi Nest for my health.",
      rating: 5,
    },
    // {
    //   id: 5,
    //   name: "Nasima Begum",
    //   location: "Khulna, Bangladesh",
    //   medicinePurchased: "Cetirizine 10mg",
    //   purchaseDate: "2025-02-02",
    //   review: "Best online pharmacy! Hassle-free ordering process.",
    //   rating: 4.7,
    // },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
      </>
    );
  };

  return (
    <section className="sectionContainer">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeader
          title={"Our Valued Customers"}
          subTitle={
            "Meet our satisfied customers who trust Medi Nest for their healthcare needs."
          }
        ></SectionHeader>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {customers.map(
          (
            {
              id,
              name,
              location,
              medicinePurchased,
              purchaseDate,
              review,
              rating,
            },
            i
          ) => (
            <div
              key={id}
              className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition border dark:border-dark-border  dark:bg-dark-card border-gray-300/50 ${
                i === 3 && "lg:hidden "
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-title">{name}</h3>
              <p className="text-gray-500 dark:text-dark-text">{location}</p>
              <p className="text-gray-600 dark:text-dark-text/70 mt-2 flex items-center gap-2">
                <GiMedicines /> Purchased: <strong>{medicinePurchased}</strong>
              </p>
              <p className="text-gray-600 dark:text-dark-text/80 flex items-center gap-2">
                <BsCalendarDate /> Date: {purchaseDate}
              </p>
              <p className="mt-3 text-gray-700 dark:text-dark-text/80 italic">"{review}"</p>
              <div className="flex gap-1 mt-3 justify-center">
                {renderStars(rating)}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
