import { FaUtensils, FaTruck, FaBoxOpen } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const steps = [
  {
    title: "Choose Your Meals",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
    icon: <FaUtensils size={28} className="text-white" />,
  },
  {
    title: "Track Order",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
    icon: <FaTruck size={28} className="text-white" />,
  },
  {
    title: "Collect Order",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
    icon: <FaBoxOpen size={28} className="text-white" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-r from-orange-100 to-orange-200 px-6 md:px-20 py-16 text-center">
      <h2 className="text-2xl font-bold text-orange-700 mb-12">
        — HOW DOES IT WORKS —
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md py-10 px-6 flex flex-col items-center space-y-4 relative"
          >
            <div className="bg-orange-500 p-4 rounded-xl absolute -top-6">
              {step.icon}
            </div>

            <div className="pt-10">
              <h3 className="font-semibold text-orange-600 text-lg">
                {step.title}
              </h3>
              <p className="text-sm text-orange-500 mt-2">{step.description}</p>
              <div className="mt-4 text-orange-500 hover:text-orange-700 transition">
                <FiArrowRight size={22} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
