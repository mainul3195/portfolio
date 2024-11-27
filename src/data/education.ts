import { IconType } from 'react-icons';
import { FaUserGraduate, FaGraduationCap } from 'react-icons/fa';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  icon: IconType;
  achievements: string[];
}

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Shahjalal University of Science and Technology, Sylhet",
    duration: "2019 – Present",
    location: "Sylhet, Bangladesh",
    icon: FaUserGraduate,
    achievements: [
      "CGPA 3.97/4.00 (up to 6th semester)",
      "Merit Position: 3rd",
      "Dean's List Award in all semesters",
      "University Merit Scholarship"
    ]
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Notre Dame College, Dhaka",
    duration: "2017-2019",
    location: "Dhaka, Bangladesh",
    icon: FaGraduationCap,
    achievements: [
      "GPA 5.00",
      "Merit Scholarship",
      "Position: Top 5% among 2000+ students"
    ]
  },
  {
    degree: "Secondary School Certificate",
    institution: "Bindubasini Govt. Boys' High School, Tangail",
    duration: "2012-2017",
    location: "Tangail, Bangladesh",
    icon: FaGraduationCap,
    achievements: [
      "GPA 5.00",
      "Board Merit Scholarship",
      "Junior Scholarship"
    ]
  }
];
