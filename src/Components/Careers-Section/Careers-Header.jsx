function CareersHeader() {
  return (
    <div className="relative overflow-hidden h-screen flex flex-col items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 md:px-0">
        <h1
          className="text-center md:text-8xl text-3xl font-bold mb-8"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          CAREERS
        </h1>
        <p
          className="font-medium md:text-2xl text-lg text-center "
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          BIG<span className="text-orange-400">Ben</span> is always on the
          lookout for leaders who can join us <br></br>in our journey of making
          dreams come true.
        </p>
      </div>
    </div>
  );
}

export default CareersHeader;
