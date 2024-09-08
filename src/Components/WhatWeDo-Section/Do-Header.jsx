function DoHeader() {
  return (
    <div className="relative overflow-hidden h-screen flex flex-col items-center z-10 justify-center">
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
          className="text-center md:text-7xl text-3xl font-bold mb-5"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          What we do
        </h1>
        <p
          className="font-medium md:text-2xl text-lg"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          We combine innovation and technology to bring games to life.
        </p>

        <button
          className="pt-[15px] pb-[15px] pr-[30px] pl-[30px] bg-orange-500 text-black mt-[50px]"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          WANT TO COLLABORATE?
        </button>
      </div>
    </div>
  );
}

export default DoHeader;
