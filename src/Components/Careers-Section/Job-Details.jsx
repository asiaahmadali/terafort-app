import { useParams } from "react-router-dom";
import ApplyJob from "./Apply-Job";
import JobSpecifications from "./Job-Specifications";
import NavBar from "../Home-Section/NavBar";
const jobDetails = {
  "2d-spine-animator": {
    title: "2D Spine Animator",
    description: `We are seeking a talented 2D Spine Animator to join our growing team. As a 2D Spine Animator at Terafort, you will be responsible for bringing characters, creatures, and environments to life through fluid and dynamic animations. Using Spine software, you will collaborate closely with our art and design teams to create visually stunning animations that enhance gameplay and storytelling.`,

    responsibilities: [
      "2D Animation Creation: Develop high-quality 2D animations for characters, environments, and UI elements using Spine or similar animation software.",
      "Character Rigging: Rig characters and objects for animation, ensuring smooth movement, flexibility, and efficient use of assets.",
      "Animation Sequencing: Create animation sequences for various in-game actions such as idle, walk, run, jump, attack, and special abilities.",
      "Motion Design: Design and animate dynamic and engaging motions, transitions, and effects to enhance gameplay and visual appeal.",
      "Collaboration: Work closely with game designers, artists, and developers to understand animation requirements, integrate animations into the game engine, and iterate based on feedback.",
      "Optimization: Optimize animations for performance, file size, and platform compatibility without compromising quality.",
      "Documentation: Maintain documentation of animation assets, rigging setups, and animation pipelines for reference and future use.",
    ],

    skills: [
      "Proficiency in 2D animation software such as Spine, Adobe Animate (formerly Flash), or similar tools.",
      "Strong understanding of animation principles, timing, and motion dynamics.",
      "Experience with character rigging and skeletal animation techniques.",
      "Knowledge of game development pipelines, engines (Unity, Unreal Engine), and asset integration processes.",
      "Ability to collaborate effectively with cross-functional teams and adapt to project requirements and timelines.",
      "Creative thinking and problem-solving skills to create visually appealing and functional animations.",
      "Portfolio showcasing a range of 2D animation work, preferably including game-related projects.",
      "Good communication skills and attention to detail.",
      "Bachelor's degree or equivalent experience in animation, game design, or a related field may be required or preferred.",
    ],

    benefits: [
      "Continuous Growth & learning Opportunities",
      "Positive Culture & Energetic Work Environment",
      "Competitive salary",
      "Provident Fund",
      "EOBI",
      "Health Insurance",
    ],
  },
  "business-developer-executive": {
    title: "Business Development Executive",
    description: `A project of Terafort, eShaafi, a leading Pakistani phygital healthcare platform, is seeking a passionate and results-oriented Business Development (BD) professional to join our growing team. In this role, you will play a key role in expanding our network of partnerships and driving strategic growth for eShaafi.`,

    responsibilities: [
      "Identify and develop new business opportunities with Corporates, hospitals, clinics, diagnostic labs, and other healthcare providers.",
      "Negotiate and finalize mutually beneficial partnership agreements.",
      "Manage and maintain strong relationships with existing and new partners.",
      "Develop and implement strategies to increase brand awareness and drive user acquisition for eShaafi.",
      "Conduct market research and competitor analysis to stay ahead of industry trends.",
      "Prepare proposals and presentations to showcase the value proposition of eShaafi partnerships.",
      "Contribute to the development and execution of overall business development plans.",
      "Track and analyze key performance indicators (KPIs) to measure the success of BD initiatives.",
    ],

    skills: [
      "Bachelor's degree in Business Administration, Marketing, Healthcare Management, or a related field (preferred).",
      "Minimum 2-4 years of experience in business development, preferably within the healthcare industry.",
      "Proven track record of successfully building and managing strategic partnerships.",
      "Excellent communication, negotiation, and interpersonal skills.",
      "Strong analytical and problem-solving abilities.",
      "Ability to work independently and as part of a team.",
      "Self-motivated with a strong drive to achieve results.",
      "Proficiency in Microsoft Office Suite and CRM software (a plus).",
      "Experience in the Pakistani healthcare landscape (highly desirable).",
    ],

    benefits: [
      "Continuous Growth & learning Opportunities",
      "Positive Culture & Energetic Work Environment",
      "Competitive salary",
      "Provident Fund",
      "EOBI",
      "Health Insurance",
    ],
  },
  "backend-developer": {
    title: "Backend Developer",
    description: `We are seeking an experienced Backend Developer to join our dynamic team. The successful candidate will be responsible for the development of components and features on the server-side. The role involves creating, maintaining, testing, and debugging the entire backend project.`,

    responsibilities: [
      "Design and implement scalable and robust backend APIs using Django to handle text-to-art image generation, user management, social features, and data storage.",
      "Integrate with chosen text-to-art APIs or models to generate high-quality images based on user prompts.",
      "Develop and maintain secure user authentication and authorization systems using Django's built-in features and additional libraries.",
      "Implement efficient data storage and retrieval mechanisms in PostgreSQL for user data, images, and social interactions.",
      "Design and implement features for user profiles, feeds, messaging, and notifications within the Django framework.",
      "Optimize backend performance and ensure high availability for the application using caching, load balancing, and other techniques.",
      "Collaborate with frontend developers and other team members to ensure seamless integration and functionality.",
      "Write clean, well-documented, and maintainable code adhering to Django best practices and following Python coding conventions.",
      "Stay up-to-date with the latest Django and Python developments, as well as emerging technologies relevant to text-to-art models and image processing.",
    ],

    skills: [
      "Strong proficiency in Django framework and Python programming language.",
      "Experience with building and maintaining RESTful APIs using Django REST framework.",
      "Understanding of relational databases and experience with PostgreSQL.",
      "Knowledge of security best practices and familiarity with implementing them in Django.",
      "Strong problem-solving and communication skills.",
      "Ability to work effectively in a team environment.",
    ],

    benefits: [
      "Continuous Growth & learning Opportunities",
      "Positive Culture & Energetic Work Environment",
      "Competitive salary",
      "Provident Fund",
      "EOBI",
      "Health Insurance",
    ],
  },

  "ios-developer": {
    title: "iOS Developer",
    description: `Join our team as an iOS Developer and be part of crafting innovative and seamless iOS applications. We are seeking a skilled professional to design, develop, and enhance high-quality apps for our users. If you're passionate about iOS development, possess a strong work ethic, and thrive in a collaborative, fast-paced environment, we welcome your expertise to contribute to our mission.`,

    responsibilities: [
      "Design and develop user-friendly and visually appealing interfaces using SwiftUI.",
      "Integrate text-to-art API(s) and ensure seamless user experience with the creative process.",
      "Implement core social features (APIs) like user authentication, publishing posts, user profiles, feeds, messaging, and notifications.",
      "Collaborate with designers and other team members to achieve a smooth and responsive UI/UX.",
      "Write clean, well-documented, and maintainable code according to Apple's best practices.",
      "Stay up-to-date with the latest SwiftUI advancements, logic design patterns, and mobile app optimization techniques.",
    ],

    skills: [
      "Strong understanding of software architecture principles and patterns for mobile apps.",
      "Strong proficiency in Swift language and proven experience with SwiftUI.",
      "Experience with Xcode and iOS development tools.",
      "Familiarity with relevant design tools and frameworks for architecture (e.g., Clean Architecture, VIPER).",
      "Clear understanding of APIs and networking.",
      "Strong problem-solving and communication skills.",
      "Ability to work effectively in a team environment.",
      "Passion for technology.",
    ],

    benefits: [
      "Continuous Growth & learning Opportunities",
      "Positive Culture & Energetic Work Environment",
      "Competitive salary",
      "Provident Fund",
      "EOBI",
      "Health Insurance",
    ],
  },
  "marketing-specialist": {
    title: "Marketing Specialist",
    description: `We are seeking a talented and dynamic Marketing Specialist to spearhead our user acquisition efforts and drive profitability through comprehensive marketing strategies.`,

    responsibilities: [
      "Develop and implement comprehensive marketing strategies for user acquisition and ensuring profitability through paid and organic channels, such as app store optimization (ASO), social media marketing (SMM), and paid advertising campaigns.",
      "Manage app store optimization (ASO) for the Play Store by optimizing app listings with relevant keywords, compelling descriptions, and captivating visuals to improve app discoverability and organic downloads.",
      "Lead the app publishing process on the Play Store, ensuring all necessary steps and policies are adhered to for successful app launch and ongoing maintenance.",
      "Execute social media marketing campaigns by developing engaging content for platforms like TikTok, YouTube, and Facebook to increase brand awareness, drive app downloads, and foster user engagement.",
      "Manage paid user acquisition campaigns through platforms such as Google Ads, Facebook, and Twitter to target specific demographics and achieve user acquisition goals.",
      "Analyze marketing campaign performance by tracking and analyzing data across various channels to measure campaign effectiveness and optimize future strategies.",
    ],

    skills: [
      "Proven experience in developing and executing successful marketing strategies for user acquisition, particularly in the mobile app industry.",
      "Strong understanding of app store optimization (ASO) principles and best practices, particularly for the Play Store.",
      "Familiarity with app publishing procedures and Play Store policies.",
      "Proficient in social media marketing platforms and best practices.",
      "Experience managing paid advertising campaigns on platforms like Google Ads, Facebook, and Twitter.",
      "Excellent analytical skills with the ability to interpret data and draw actionable insights.",
      "Strong aesthetic sense and ability to create visually appealing marketing content for various platforms.",
    ],

    experience: [
      "Minimum 1 year of experience in a marketing role, preferably within the mobile app industry.",
      "Demonstrated experience with successfully launching and managing an app on the Play Store.",
    ],

    benefits: [
      "Continuous Growth & learning Opportunities",
      "Positive Culture & Energetic Work Environment",
      "Competitive salary",
      "Provident Fund",
      "EOBI",
      "Health Insurance",
    ],
  },
  "2d-concept-artist": {
    title: "2D Concept Artist",
    description: `As a 2D Concept Artist specializing in environments, your role is pivotal in shaping our games' visual identity. You'll create immersive environments that bring our game worlds to life, translating concepts into stunning designs.`,

    responsibilities: [
      "Creating high-quality 2D concept art for environments in line with the game's artistic vision.",
      "Collaborating with the team to develop and refine visual concepts.",
      "Conducting research and gathering references for authentic environmental design.",
      "Iterating on designs based on feedback to achieve the desired look and feel.",
      "Crafting storyboards and visualizations to communicate environmental concepts effectively.",
      "Understanding technical constraints for game environments and ensuring feasibility.",
      "Collaborating with other artists and developers to integrate concepts seamlessly.",
      "Maintaining organized documentation of concept art assets.",
      "Adapting to changes in project scope and artistic direction.",
    ],

    skills: [
      "Degree in Graphic Design, Visual Arts, or a related field.",
      "Comprehensive understanding and application of fundamental art principles.",
      "Ability to ideate, conceptualize, and refine original concepts into polished visual designs.",
      "Strong problem-solving and communication skills.",
      "Ability to work effectively in a team environment.",
      "Passion for Arts.",
    ],

    benefits: [
      "Continuous Growth & learning Opportunities",
      "Positive Culture & Energetic Work Environment",
      "Competitive salary",
      "Provident Fund",
      "EOBI",
      "Health Insurance",
    ],
  },

  // Add other jobs here
};

function JobDetail() {
  const { jobId } = useParams();
  const job = jobDetails[jobId];

  if (!job) {
    return <h2>Job not found</h2>;
  }

  return (
    <div className="p-4">
      <NavBar></NavBar>
      <JobSpecifications
        title={job.title}
        description={job.description}
        responsibilities={job.responsibilities}
        skills={job.skills}
        benefits={job.benefits}
      ></JobSpecifications>
      <ApplyJob title={job.title}></ApplyJob>
    </div>
  );
}

export default JobDetail;
