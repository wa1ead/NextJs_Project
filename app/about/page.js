export default function About() {
  return (
    <section id="about" className="bg-gray-900">
      <div className="mx-32 py-20 max-lg:mx-4 max-lg:my-16">
        <div>
          <h1 className="text-center text-4xl font-bold text-gray-200">Career history</h1>
          <div className="flex justify-evenly items-center p-12 gap-8 max-lg:flex-col max-md:p-2">
            <video
              width="500"
              height="240"
              autoPlay
              muted
              loop
              className="justify-start self-center rounded-md max-lg:h-[600px]"
            >
              <source src="/about-video.mp4" type="video/mp4" />
            </video>
            <div className="justify-end flex flex-col gap-20 max-lg:gap-8 max-md:gap-6">
              {/* Career Items */}
              {[
                {
                  img: "https://pbs.twimg.com/profile_images/1313161000602959872/EtO2HHEa_400x400.png",
                  title: "GoMyCode student",
                  date: "Aug 2024 - Jan 2025 · 6 mos",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit repudiandae quaerat dolor animi illo nesciunt accusamus vero eligendi neque.",
                },
                {
                  img: "https://media.licdn.com/dms/image/D4E0BAQHBL4Yi1Qjunw/company-logo_200_200/0/1721140366094/mzlouafi_logo?e=2147483647&v=beta&t=QMPye1U8fN81wRUhb-qDajzlMkIYhEZrwvf50E7c1Y4",
                  title: "MZ Louafi intern",
                  date: "Aug 2023 - Jan 2024 · 6 mos",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit repudiandae quaerat dolor animi illo nesciunt accusamus vero eligendi neque.",
                },
                {
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZN0HWvU8i2fIJXJNn8b6Evwl3mKYLPDq3ug&s",
                  title: "Pantofit SARL intern",
                  date: "Mar 2023 - May 2023 · 3 mos",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit repudiandae quaerat dolor animi illo nesciunt accusamus vero eligendi neque.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-gray-950 p-4 rounded-xl border border-white max-md:px-1"
                >
                  <div>
                    <img
                      alt={item.title}
                      src={item.img}
                      className="rounded-full h-20 w-48 bg-[center_center] max-lg:w-28 max-md:w-48"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-100 mb-4">
                      {item.title}
                    </h1>
                    <span className="text-gray-300">{item.date}</span>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-center text-4xl font-bold mb-8 text-gray-200">Expertise</h1>
            <div className="flex space-between justify-center gap-6 p-4 max-lg:overflow-x-auto max-md:gap-12">
              {[
                { name: "JavaScript", img: "data:image/png;base64,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" },
                { name: "TailwindCSS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" },
                { name: "NodeJs", img: "https://delta-dev-software.fr/wp-content/uploads/2024/02/nodejs.jpg" },
                { name: "ReactJs", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s" },
                { name: "ExpressJs", img: "https://kinsta.com/wp-content/uploads/2022/04/express-1.png" },
                { name: "MongoDB", img: "https://lh5.googleusercontent.com/NpCFEToPJTrK4VZ7i4-ggNHgWfOGnLYh7S059c25TOCZunHJv8ljPOHIjnoWB_Y1cxCIQ6dbXf-x4J9G2SXvuUEoo2C3r2tWj3qekRyZRQhk0JT-vGtnVk5oOEFGcRn8hQ-I3CH-5FZXgPJFlG7-4pI" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="border flex flex-col items-center gap-2 border-violet-900 rounded-lg p-8 bg-gray-800 min-w-40"
                >
                  <img
                    alt={tech.name}
                    src={tech.img}
                    className="w-20 rounded-full h-20"
                  />
                  <p className="text-xl font-semibold">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
