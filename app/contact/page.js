import Box from "../components/Box";

export default function Contact() {
  return (
    <Box>
      <section id="contact" className="bg-gray-900">
        <div className="mx-32 py-20 max-lg:mx-4 max-lg:my-16 max-md:mx-2">
          <h1 className="text-center text-4xl font-bold mb-8 text-gray-200">
            Let's Have a Chat
          </h1>
          <div className="flex justify-center gap-4 max-md:flex-col-reverse">
            <div
              className="bg-cover bg-[center_center] h-[500px] w-[60%] my-4 mx-4 max-md:mx-0 rounded-md max-md:w-full"
              style={{
                backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.65),
                  rgba(0, 0, 0, 0.70)
                ),
                url('https://cdn.sanity.io/images/y178r8ab/production/fdbb5d2958b2e343358d59c12e430049a3744479-4096x2776.jpg')`,
              }}
            >
              <div className="flex justify-around items-center mt-[400px]">
                <div className='text-gray-200'>
                  <i className="fa-regular fa-envelope">
                    <span className="ml-4">waliddraa2@gmail.com</span>
                  </i>
                  <br />
                  <i className="fa-solid fa-location-dot">
                    <span className="ml-4">Casablanca, MOROCCO</span>
                  </i>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://www.github.com/wa1ead"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer transform hover:scale-125 transition ease-out duration-500"
                  >
                    <img
                      alt="github"
                      src="./github.png"
                      className="w-10 h-10"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/wa1ead"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer transform hover:scale-125 transition ease-out duration-500"
                  >
                    <img
                      src="./linkedin.png"
                      alt="linkedin"
                      className="w-10 h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-center font-semibold text-lg text-gray-100">
                Leave your email and I will get back to you within 24 hours
              </h3>
              <form method="POST" className="flex flex-col">
                <label htmlFor="name" className="font-semibold text-gray-200">
                  Name
                  <input
                    type="text"
                    id="name"
                    placeholder="Walid Draa"
                    className="block border border-gray-600 rounded-lg w-full bg-gray-900 h-10 p-4 font-medium text-sm mt-2 mb-4"
                  />
                </label>
                <label htmlFor="email" className="font-semibold text-gray-200">
                  Email
                  <input
                    type="email"
                    id="email"
                    placeholder="hello@iamwalid.com"
                    className="block border border-gray-600 rounded-lg w-full bg-gray-900 h-10 p-4 font-medium text-sm mt-2 mb-4"
                  />
                </label>
                <label
                  htmlFor="subject"
                  className="font-semibold text-gray-200"
                >
                  Subject
                  <input
                    type="text"
                    id="subject"
                    placeholder="Want to build a website"
                    className="block border border-gray-600 rounded-lg w-full bg-gray-900 h-10 p-4 font-medium text-sm mt-2 mb-4"
                  />
                </label>
                <label
                  htmlFor="message"
                  className="font-semibold text-gray-200"
                >
                  Message
                  <textarea
                    id="message"
                    rows="3"
                    placeholder="Looking for a skilled software developer in the MERN Stack"
                    className="block border border-gray-600 rounded-lg w-full bg-gray-900 p-4 font-medium text-sm mt-2 mb-4"
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="w-full flex gap-2 justify-center items-center cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-lg border border-gray-600 duration-200 hover:border-gray-800 hover:from-black hover:to-gray-900"
                >
                  Submit<i className="fa-regular fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
}
