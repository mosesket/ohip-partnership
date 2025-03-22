import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface AccordionItem {
  id: number;
  question: string;
  answer: any;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    question: "What is the difference between GGP and G20?",
    answer:
      "GGP is a monthly contribution  to kingdom advancement on media, while G20 is a higher-tier annual partnership for those committed to bearing a greater financial responsibility in funding major global gospel projects.",
  },
  {
    id: 2,
    question: "Who can become a partner?",
    answer:
      "Anyone with a heart for the Gospel and a willingness to support its expansion can become a partne whether as an individual, a business, or a family, there is a place for you in this divine mission.",
  },
  {
    id: 3,
    question: "How does my partnership make an impact?",
    answer:
      "Your partnership supports missions, media evangelism, church planting, humanitarian aid, and Gospel outreach programs, ensuring millions receive the message of Christ.",
  },
  {
    id: 4,
    question: "Can I adjust my partnership commitment?",
    answer:
      "Yes, you can adjust your giving at any time based on your financial capacity. Our partnership is about consistency and willingness.",
  },
  {
    id: 5,
    question: "What are the exclusive benefits of G20?",
    answer: (
      <>
        G20 partners receive all GGP benefits plus:
        <ul className="list-disc ml-5 mt-8">
          <li>A birthday gift box</li>
          <li>
            Priority access to the Ark Auditorium G20 Lounge on all service days
            and special global program
          </li>
          <li>A personal birthday prayer call from the Prophet</li>
          <li>Invite-only access to a special dinner with the Prophet</li>
          <li>Invite-only access to a special dinner with the Prophet</li>
          <li>
            The privilege of having their name and business inscribed on the
            Prophet’s highest altar
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    question: "What specific projects does my partnership support?",
    answer: (
      <>
        <ul className="list-disc ml-5 mt-4">
          <li>
            <strong>Media Evangelism:</strong> Spreading the Gospel through TV,
            radio, and digital platforms
          </li>
          <li>
            <strong>Missions & Church Planting:</strong> Establishing new
            churches in unreached areas
          </li>
          <li>
            <strong>Mercy Projects:</strong> Providing food, education, and
            support for the needy
          </li>
          <li>
            <strong>Building Projects:</strong> Supporting infrastructure like
            the Ark of Light Auditorium
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    question: "Can I get updates on how my partnership is making a difference?",
    answer:
      "Yes! You will receive monthly newsletters impact reports and testimonials.",
  },
  {
    id: 8,
    question: "Is my partnership a one-time donation or ongoing?",
    answer:
      "Partnership is an ongoing commitment, but you are free to give one-time special offerings whenever led.",
  },
  {
    id: 9,
    question: "Can I partner from outside Nigeria?",
    answer:
      "Yes, we accept international partners. Our payment system allows for transactions from any part of the world.",
  },
];

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    toggleAccordion(0);
  }, []);

  return (
    <div className="w-full max-w-4xl mt-10 mx-auto">
      {accordionData.map((item, index) => (
        <div
          key={item.id}
          className="rounded-lg shadow-md mb-5 overflow-hidden"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 bg-white font-semibold text-lg"
          >
            {item.question}
            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-100">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
