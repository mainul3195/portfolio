import {
    FaReact,
    FaNode,
    FaCode,
    FaJava,
    FaDesktop,
    FaHome,
    FaMobileAlt,
    FaServer,
    FaBrain,
    FaGamepad,
    FaCss3Alt,
    FaHtml5,
    FaKey,
} from "react-icons/fa";
import {
    SiMongodb,
    SiExpress,
    SiTypescript,
    SiMysql,
    SiEspressif,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

export const projectsData = [
    {
        title: "SUST Open Courseware",
        description:
            "Developed a comprehensive online learning platform for SUST using MERN stack. Serves as a centralized repository for course materials, includes features for course enrollment, chapter-wise learning, quizzes, and certificate issuance. Led the project as Project Manager.",
        tech: [
            { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
            { name: "Express", icon: SiExpress, color: "text-white" },
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "Node.js", icon: FaNode, color: "text-green-500" },
            {
                name: "TypeScript",
                icon: SiTypescript,
                color: "text-blue-400",
            },
        ],
        type: "Full Stack",
        link: "https://github.com/SUST-Open-Courseware/SUST-Open-CourseWare",
    },
    {
        title: "iShopNow",
        description:
            "A user-friendly e-commerce website using MERN stack: MongoDB for database, Express for server-side framework, React for client-side framework, and Node.js for backend.",
        tech: [
            { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
            { name: "Express", icon: SiExpress, color: "text-white" },
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "Node.js", icon: FaNode, color: "text-green-500" },
            {
                name: "TypeScript",
                icon: SiTypescript,
                color: "text-blue-400",
            },
        ],
        type: "Full Stack",
    },
    {
        title: "Pigeonnier",
        description:
            "An Email Client Software using JavaFX that gives all the facilities of the Gmail website as well as some extra features.",
        tech: [
            { name: "Java", icon: FaJava, color: "text-red-500" },
            { name: "JavaFX", icon: FaDesktop, color: "text-blue-400" },
            { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
            {
                name: "Persistence",
                icon: TbDatabase,
                color: "text-yellow-400",
            },
            { name: "SHA256", icon: FaKey, color: "text-green-400" },
        ],
        type: "Desktop Application",
    },
    {
        title: "IOT-Based Home Control System",
        description:
            "Using the esp8266 microcontroller and the facilities of Blynk, we made a system to control all home appliances from any part of the world over the internet.",
        tech: [
            { name: "ESP8266", icon: SiEspressif, color: "text-red-500" },
            { name: "Blynk", icon: FaHome, color: "text-blue-400" },
            { name: "IoT", icon: FaMobileAlt, color: "text-green-500" },
        ],
        type: "IoT Project",
    },
    {
        title: "Online Course Management System",
        description:
            "A web project using Servlet, JSP for the backend, SQL for managing the Database, and HTML, and CSS for the front end.",
        tech: [
            { name: "Java", icon: FaJava, color: "text-red-500" },
            { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
            { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
            { name: "Servlet/JSP", icon: FaServer, color: "text-gray-400" },
            { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
        ],
        type: "Web Application",
    },
    {
        title: "Interactive Tic-Tac-Toe",
        description:
            "A learning project for language C where a player can interactively play the game with a computer.",
        tech: [
            { name: "C", icon: FaCode, color: "text-gray-400" },
            { name: "Algorithms", icon: FaBrain, color: "text-purple-400" },
            { name: "Game Dev", icon: FaGamepad, color: "text-green-400" },
        ],
        type: "Console Application",
    },
];

export const hackathonsData = [
    {
        title: "North South University Hackathon",
        description: "Reached Top 10 in the competition",
    },
    {
        title: "Leading University Hackathon",
        description: "Participated and gained valuable development experience",
    },
];
