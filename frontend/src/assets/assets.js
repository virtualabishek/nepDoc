import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Samrat Shrestha",
    image: doc1,
    speciality: "General Physician",
    degree: "MBBS, MD",
    experience: "7 Years",
    about:
      "Dr. Samrat Shrestha specializes in general medicine with a focus on chronic disease management and preventive care. He is committed to providing high-quality healthcare services.",
    fees: 1100,
    address: {
      line1: "Venus Hospital",
      line2: "Balkhu, Kathmandu, Nepal",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Reena Shrestha",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "10 Years",
    about:
      "Dr. Reena Shrestha is a highly experienced gynecologist specializing in women's reproductive health. She is dedicated to providing comprehensive care and effective treatment strategies.",
    fees: 1200,
    address: {
      line1: "Nepal Medical College",
      line2: "Attarkhel, Jorpati, Kathmandu, Nepal",
    },
  },

  {
    _id: "doc3",
    name: "Dr. Anil Kumar Bhatta",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, MD",
    experience: "10 Years",
    about:
      "Dr. Anil Kumar Bhatta is a Dermatologist, Venereologist, and Aesthetician specializing in skin, hair, and laser treatments.",
    fees: 1500,
    address: {
      line1: "Derm Dynamics Skin Hair & Laser Clinic",
      line2: "Kumaripati, Lalitpur, Nepal",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Suman Bikram Adhikari Chhetri",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS, MD",
    experience: "6 Years",
    about:
      "Dr. Suman Bikram Adhikari Chhetri specializes in pediatric surgery and urology, offering advanced surgical care for children.",
    fees: 1400,
    address: {
      line1: "Ishan Children & Women's Hospital",
      line2: "Basundhara, Kathmandu, Nepal",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Pankaj Jalan",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, MD, DM",
    experience: "12 Years",
    about:
      "Dr. Pankaj Jalan is a senior neurologist providing expert care in neurological conditions at Norvic International Hospital.",
    fees: 2000,
    address: {
      line1: "Norvic International Hospital",
      line2: "Thapathali, Kathmandu, Nepal",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Pratap Sagar Tiwari",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS, MD, DM",
    experience: "11 Years",
    about:
      "Dr. Pratap Sagar Tiwari is a neurologist and hepatologist providing expert care at Nobel Medical College and Bir Hospital.",
    fees: 2100,
    address: {
      line1: "Nobel Medical College",
      line2: "Biratnagar, Morang, Nepal",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Barsha Bista",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS, MD",
    experience: "14 Years",
    about:
      "Dr. Barsha Bista is a renowned cardiologist based at Norvic Hospital, where she specializes in both invasive and non-invasive cardiac procedures. She has played a pivotal role in establishing state-of-the-art cardiac facilities and labs in Nepal. ",
    fees: 700,
    address: {
      line1: "44600, Kathmandu",
      line2: "Thapathali, Kathmandu, Nepal",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Swasti Sharma",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "6 Years",
    about:
      "Dr. Swasti Sharma is a gynecologist and fertility specialist focused on reproductive health and family planning.",
    fees: 1400,
    address: {
      line1: "Greencity Hospital",
      line2: "Dhapasi-8, Basundhara, Kathmandu, Nepal",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Mohan Bhusal",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS, MD",
    experience: "7 Years",
    about:
      "Dr. Mohan Bhusal is a Dermatologist specializing in Venereology and Aesthetic treatments, with a focus on skin health and rejuvenation.",
    fees: 1300,
    address: {
      line1: "Private Clinic",
      line2: "Kathmandu, Nepal",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Nipun Shrestha",
    image: doc10,
    speciality: "Pediatrician",
    degree: "MBBS, MD",
    experience: "5 Years",
    about:
      "Dr. Nipun Shrestha is a consultant pediatrician providing comprehensive child healthcare services in Bhaktapur.",
    fees: 1000,
    address: {
      line1: "Siddhi Memorial Women and Children Hospital",
      line2: "Bhaktapur, Nepal",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Robin Man Karmacharya",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS, MD",
    experience: "10 Years",
    about:
      "Dr. Robin Man Karmacharya is a neurologist specializing in vascular, cardiac, and thoracic surgery at Dhulikhel Hospital.",
    fees: 1800,
    address: {
      line1: "Dhulikhel Hospital",
      line2: "Kathmandu, Nepal",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Ghanshyam Kharel",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS, MD, DM",
    experience: "10 Years",
    about:
      "Dr. Ghanshyam Kharel is a neurologist with expertise in treating brain, spine, and nerve disorders at Upendra Devkota Memorial Institute of Neurological Sciences.",
    fees: 1800,
    address: {
      line1:
        "Upendra Devkota Memorial National Institute of Neurological Sciences",
      line2: "Bansbari, Kathmandu, Nepal",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Pukar Thapa",
    image: doc13,
    speciality: "General Physician",
    degree: "MBBS, MD",
    experience: "10 Years",
    about:
      "Dr. Pukar Thapa specializes in internal medicine with a focus on chronic disease management. He is committed to providing high-quality care to his patients.",
    fees: 950,
    address: {
      line1: "Chitwan Model Hospital",
      line2: "Dursanchar Road, Bharatpur-10, Chitwan, Nepal",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Mala Shrestha",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "8 Years",
    about:
      "Dr. Mala Shrestha specializes in obstetrics and gynecology, providing comprehensive care for women at Ishan Children & Women's Hospital.",
    fees: 1600,
    address: {
      line1: "Ishan Children & Women's Hospital",
      line2: "Basundhara, Kathmandu, Nepal",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Rupak Ghimire",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS, MD",
    experience: "9 Years",
    about:
      "Dr. Rupak Ghimire is a Dermatologist and Hair Transplant Surgeon, specializing in advanced dermatological treatments.",
    fees: 1600,
    address: {
      line1: "Kathmandu Medical College & Teaching Hospital",
      line2: "Sinamangal, Kathmandu, Nepal",
    },
  },
];
