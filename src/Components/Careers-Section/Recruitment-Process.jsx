// RecruitmentProcess.js
import RecruitmentCard from "./Recruitment-card";

function RecruitmentProcess() {
  // Headings
  const heading1 = "Apply";
  const heading2 = "Recruiter Review";
  const heading3 = "Onboarding";
  const heading4 = "Interviews (Online/Physical)";

  // Paragraphs
  const para1 =
    "Find open vacancies on the website & our social media pages i.e. LinkedIn etc and apply for positions that align with your particular skill set.";

  const para2 =
    "Our recruitment committee will review your application. They will screen your résumé and find the best fit for you.";

  const para3 =
    "If the whole recruitment process results in a positive outcome, our onboarding team will give you a complete understanding of your professional journey at Terafort Limited.";

  const para4 =
    "There is a competency-based interviewing process to identify the potential individuals who will thrive in our environment along with being professionally & culturally fit. There is usually a series of interviews e.g the hiring manager’s interview, and a combination of technical screens, panel interviews, and team presentations.";

  return (
    <div className="md:p-[100px] p-[10px]">
      <div className="flex flex-col gap-4 md:items-start items-center mb-[20px] md:mb-[50px]">
        <h1 className="font-bold md:text-3xl text-xl">Recruitment Process</h1>
        <p className="text-orange-400 font-medium text-xl">
          Steps: What’s next to come!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
        <RecruitmentCard heading={heading1} para={para1} number="1" />
        <RecruitmentCard heading={heading2} para={para2} number="2" />
        <RecruitmentCard heading={heading4} para={para4} number="3" />
        <RecruitmentCard heading={heading3} para={para3} number="4" />
      </div>
    </div>
  );
}

export default RecruitmentProcess;
