export default function Hero() {
  return (
    <section id="hero" className="bg-gray-800">
      <div className="mx-32 py-20 max-lg:mx-4 max-lg:my-16">
        <div className="text-center">
          <h1 className="font-extrabold text-[50px] mx-32 max-lg:mx-4 max-md:text-[30px] text-gray-100">
            👋 Hello! I'm WALID DRAÂ, a passionate Full Stack Developer
          </h1>
          <p className="font-bold text-2xl mt-8 mx-60 max-lg:my-6 max-lg:mx-8 max-lg:text-xl max-md:text-md max-md:mt-4 text-gray-200">
            specializing in JavaScript and the MERN Stack (MongoDB, Express.js,
            React.js, Node.js)
          </p>
          <div className="mt-8 flex justify-center mx-auto gap-2">
            <button className="w-56 flex gap-2 justify-center items-center cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-lg border border-gray-600 duration-200 hover:border-gray-800 hover:from-black hover:to-gray-900 max-md:w-40">
              Say Hi <i className="fa-solid fa-comment"></i>
            </button>
            <button className="w-56 flex gap-2 justify-center items-center cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-lg border border-gray-600 duration-200 hover:border-gray-800 hover:from-black hover:to-gray-900 max-md:w-40">
              Resume <i className="fa-solid fa-file-arrow-down"></i>
            </button>
          </div>
        </div>
        <div
          className="bg-cover bg-[center_center] my-24 mx-4 rounded-lg max-lg:mx-0 h-full"
          style={{
            backgroundImage: `linear-gradient(
      rgba(4, 7, 29, 0.9),
      rgba(12, 14, 35, 1)
    ), url('/about.webp')`,
          }}
        >
          <div className="flex p-12 gap-12 items-center h-full max-lg:flex-col-reverse max-lg:gap-0 max-md:px-2">
            <div>
              <h2 className="font-bold text-gray-300 text-4xl mb-6 max-md:text-3xl">
                WHO I AM?
              </h2>
              <p className="font-semibold text-xl text-gray-100 leading-10 max-md:text-lg">
                🚀 My journey in software development has been driven by a
                relentless pursuit of learning and mastering the latest
                technologies. From building engaging React applications to
                designing scalable back-end solutions with Node.js, I am
                dedicated to pushing the boundaries of what's possible in web
                development.
                <br />
                🌟 As I continue to expand my skills and expertise, I am excited
                to collaborate on new projects and contribute to the
                ever-evolving landscape of web development. Let's connect and
                explore how we can create exceptional digital experiences
                together!
              </p>
            </div>
            <img
              alt="me"
              src="/me.jpg"
              className="rounded-lg w-80 h-80 max-lg:mb-8 max-md:w-60 max-md:h-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
