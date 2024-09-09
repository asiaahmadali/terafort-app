function JobSpecifications(Props) {
  return (
    <div className="p-4 md:p-8 border-b-[2px]">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center md:mt-[100px] mt-[10px]">
        {Props.title}
      </h1>
      <p className="text-base md:text-lg mb-6">{Props.description}</p>

      <h2 className="text-xl md:text-2xl font-semibold mb-2">
        Responsibilities
      </h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        {Props.responsibilities && Props.responsibilities.length > 0 ? (
          Props.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-base md:text-lg">
              {responsibility}
            </li>
          ))
        ) : (
          <p>No responsibilities listed</p>
        )}
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mb-2">
        Skills and Qualifications
      </h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        {Props.skills && Props.skills.length > 0 ? (
          Props.skills.map((skill, index) => (
            <li key={index} className="text-base md:text-lg">
              {skill}
            </li>
          ))
        ) : (
          <p>No skills listed</p>
        )}
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mb-2">What We Offer</h2>
      <ul className="list-disc pl-5 space-y-2">
        {Props.benefits && Props.benefits.length > 0 ? (
          Props.benefits.map((benefit, index) => (
            <li key={index} className="text-base md:text-lg">
              {benefit}
            </li>
          ))
        ) : (
          <p>No benefits listed</p>
        )}
      </ul>
    </div>
  );
}

export default JobSpecifications;
