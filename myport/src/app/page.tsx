import Image from "next/image";
import Link from "next/link";
import image from "./test.png";
import GHLogo from "./25231.png";

export default function Home() {
  return (
    <>
      <nav className="flex items-center bg-gray-900 p-2 sm:p-4 md:p-4 lg:p-4 xl:p-6">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <span className="font-semibold text-xl tracking-tight">About Me</span>
        </div>
      </nav>
      <main className="sm:p-2 md:p-4 lg:p-6 xl:p-8 py-0">
        <div className="sidenav p-4 md:p-6 sm:w-1/4 box-border sm:inline-block sm:align-top sm:sticky sm:top-1 -mt-0 sm:-m-2 md:-mt-4 lg:-mt-6 xl:-mt-8 pt-4 sm:pt-4 md:pt-8 lg:pt-12 xl:pt-16 overflow-y-auto">
          <Image
            className="rounded-full max-w-72 w-full light:hidden"
            src={image}
            alt="Picture of the author"
            width={200}
            height={200}
          />
          <div className="sm:mx-auto">
            <h1 className="text-4xl font-bold mt-4">Max Locke</h1>
            <Link
              href="https://github.com/TheLazyCodernothacker"
              target="_blank"
            >
              <h2 className="text-neutral-500 text-xl ">
                @TheLazyCodernothacker
              </h2>
            </Link>
            <p className="text-2xl mt-4">
              14 year old full-stack developer from Bellevue, WA
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center">
            <Link
              href="https://github.com/TheLazyCodernothacker"
              target="_blank"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                alt="GitHub Logo"
                width={50}
                height={50}
              />
            </Link>
            <Link
              href="https://github.com/TheLazyCodernothacker"
              target="_blank"
            >
              <Image src={GHLogo} alt="GitHub Logo" width={50} height={50} />
            </Link>
            <Link
              href="https://www.npmjs.com/~thelazycodernothacker"
              target="_blank"
              className="ml-4"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/800px-Npm-logo.svg.png"
                alt="NPM Logo"
                width={50}
                height={50}
              />
            </Link>
            <Link
              href="https://youtube.com/@CodeSymph"
              target="_blank"
              className="ml-4"
            >
              <Image
                src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
                alt="NPM Logo"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className="sm:w-3/4  p-4 md:p-6 sm:inline-block box-border">
          <h2 className="text-5xl font-bold mt-4 text-gray-600">About Me</h2>
          <p className="text-xl mt-4">
            Hello, I&apos;m Max Locke, the creator of Subatomic.js, a fullstack
            framework for building web apps. As a 14-year-old fullstack
            developer and{" "}
            <Link
              href="https://youtube.com/@CodeSymph"
              target="_blank"
              className="text-gray-600 font-bold"
            >
              YouTuber
            </Link>{" "}
            from Bellevue, WA. I enjoy programming, especially web development,
            along with music theory/composition. I&apos;m passionate about
            learning and am always looking to expand my skill-set.
          </p>

          <div className="flex flex-col items-center content-center px-4 md:px-6 lg:px-8 py-10 lg:py-12">
            <blockquote
              className="text-2xl md:text-3xl quote relative"
              style={{
                "font-style": "italic",
              }}
            >
              If you think you&apos;re done learning how to code, you&apos;re
              doing something wrong.
            </blockquote>
            <cite className="w-full mt-4 text-xl">- Max Locke</cite>
          </div>
          <h1 className="text-5xl font-bold mt-0 text-gray-600">Skills</h1>
          <p className="text-xl mt-4">
            I&apos;m skilled in many areas of web development and programming,
            including:
          </p>
          <div className="flex flex-row gap-4 py-8 overflow-x-auto whitespace-nowrap h-40 py-4">
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
              alt="HTML5 Logo"
            />
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png"
              alt="CSS3 Logo"
            />
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
              alt="JavaScript Logo"
            />
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
              alt="React Logo"
            />
            <Logo
              src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              alt="Node.js Logo"
            />
            <Logo
              src="https://cdn.buttercms.com/8am8PZECScDawQa33Lv2"
              alt="Express.js Logo"
            />
            <Logo
              src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png"
              alt="MongoDB Logo"
            />
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
              alt="Python Logo"
            />
            <Logo
              src="https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png"
              alt="Next.js Logo"
            />
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201"
              alt="TypeScript Logo"
            />
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png"
              alt="Socket.io Logo"
            />
            <Logo
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png"
              alt="Tailwind CSS Logo"
            />
            <Logo
              src="https://www.shareicon.net/data/512x512/2016/09/23/833700_windows_512x512.png"
              alt="Java Logo"
            />
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"
              alt="C++ Logo"
            />
          </div>
          <h2 className="text-5xl font-bold mt-8 text-gray-600">Projects</h2>
          <p className="text-xl mt-4 mb-8">
            I&apos;ve worked on various projects, and here are some of my
            favorites:
          </p>
          <h3 className="text-3xl  mt-4">
            Subatomic.js,{" "}
            <span className=" text-2xl font-normal italic">JS Framework</span>
          </h3>
          <p className="text-xl mt-4">
            Subatomic.js began as an abstract idea for a fullstack SSR
            framework. Initially, I developed a frontend-only version using
            template literals for component definition. As the project
            progressed, I added features such as PSR, SSR, JSX, and optional
            TypeScript, turning it into a cutting-edge and feature-rich
            lightweight framework. While still in development, you can explore
            its evolution on{" "}
            <a
              href="https://github.com/TheLazyCodernothacker/Subatomic"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
            >
              GitHub
            </a>
            . I take pride in the transformation of this project, starting from
            a frontend concept and growing into a comprehensive fullstack
            framework with SSR, JSX, and PSR. You can view a demo and short
            tutorial at{" "}
            <Link
              href="https://subatomic.js.org"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
            >
              subatomic.js.org
            </Link>
            .
          </p>
          <iframe
            src="https://subatomic.js.org"
            className="w-full bg-white my-6 "
            style={{ aspectRatio: "2/1" }}
          ></iframe>

          <h3 className="text-3xl  mt-4">
            Coducation,{" "}
            <span className=" text-2xl font-normal italic">
              Learning Platform
            </span>
          </h3>
          <p className="text-xl mt-4">
            Coducation is a collaborative website that I created with{" "}
            <a
              href="https://github.com/Pineappletwo1"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
              target="_blank"
            >
              William Liang
            </a>{" "}
            to help students learn to code. It started out with Express and
            vanilla JS with our own login system and cookie management along
            with MongoDB, but we later migrated to using React and used the MERN
            tech stack. I found it very interesting to make a huge investment
            into changing the architecture of the project, and I learned a lot
            about React and the MERN stack. I also realized that user-auth is
            hard and that SSR was probably the next step to get better
            performance and SEO. You can no longer visit the website at{" "}
            <a
              href="http://home.coducation.tech"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
              target="_blank"
            >
              home.coducation.tech
            </a>{" "}
            due to Heroku prices getting too expensive, but you can view the
            code at{" "}
            <Link
              href="
              https://github.com/TheLazyCodernothacker/Coducation"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
              target="_blank"
            >
              github.com/TheLazyCodernothacker/Coducation
            </Link>
            .
          </p>

          <h3 className="text-3xl mt-4">
            Tyee Guides,{" "}
            <span className=" text-2xl font-normal italic">
              Community Portal
            </span>
          </h3>
          <p className="text-xl mt-4">
            Tyee Guides is a website that I created with{" "}
            <a
              href="https://github.com/Pineappletwo1"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
              target="_blank"
            >
              William Liang
            </a>{" "}
            in Next.js using Next Auth and MongoDB. It is a website that&apos;s
            meant to help middle schoolers at Tyee and improve their middle
            school experience. You can login with Github currently and have
            access to a global calendar where you can view and post dates, you
            can rate classes on certain criteria, and other features we never
            finished such as a newspaper. You can visit the site at{" "}
            <a
              href="https://guides.tyeems.me"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
              target="_blank"
            >
              guides.tyeems.me
            </a>
            .
          </p>
          <iframe
            src="https://guides.tyeems.me"
            className="w-full bg-white my-6 "
            style={{ aspectRatio: "2/1" }}
          ></iframe>
          <h3 className="text-3xl mt-4">
            Tyee Calendar,{" "}
            <span className=" text-2xl font-normal italic">
              Community Calendar
            </span>
          </h3>
          <p className="text-xl mt-4">
            For the{" "}
            <Link
              href="https://tyee2024.devpost.com/participants"
              target="_blank"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400"
            >
              Middle School Hackathon
            </Link>
            , inspired by Tyee Guides, Tyee Calendar is a website that I created
            with{" "}
            <a
              href="https://github.com/Pineappletwo1"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
              target="_blank"
            >
              William Liang
            </a>{" "}
            in Next.js and the same technologies as Tyee Guides. The goal of the
            website was to focus mainly on creating a calendar that students can
            contribute to. Logged in users can create and comment on events, all
            moderated by Google Gemini API to ensure safety. You can visit the
            site at{" "}
            <a
              href="https://tyeecalendar.maxlocke.me"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
              target="_blank"
            >
              tyeecalendar.maxlocke.me
            </a>
            .
          </p>
          <iframe
            src="https://tyeecalendar.maxlocke.me"
            className="w-full bg-white my-6 "
            style={{ aspectRatio: "2/1" }}
          ></iframe>
          <h3 className="text-3xl font-semibold mt-4">
            Competitive Programming
          </h3>
          <p className="text-xl mt-4">
            I just recently started competitive programming, and I&apos;m
            currently ranked third in the Tyee Programming Competition Club.
            I&apos;ve competed in the ACSL (American Computer Science League)
            While I only scored 20 points on the ACSL Junior 5 Finals, I look
            forward to improving and studying more the next season.
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-600">
            YouTube Channel
          </h2>
          <p className="text-xl mt-4">
            I am the creator, runner, filmer, editor, and everything else of the
            YouTube channel{" "}
            <Link
              href="https://youtube.com/@CodeSymph"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
            >
              Code Symphony.
            </Link>
            The channel is about programming and music and I dive into the
            potentials of AI in many videos in series. This includes my series
            of{" "}
            <Link
              href="https://www.youtube.com/watch?v=PeuNDJYVX-0&list=PLKS-_pqzLOm3z9f18w696J2pLhn60A1Iq"
              target="_blank"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
            >
              Learning Java from ChatGPT
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.youtube.com/watch?v=v6k2vfOR208&list=PLKS-_pqzLOm2Q-WFO5sg6uG1xGQ5X11IE&index=1"
              target="_blank"
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
            >
              Learning C++ from ChatGPT
            </Link>
            .
          </p>
          <iframe
            src="https://www.youtube.com/embed/434BJGn7lSk?si=-zE1lxc1ffxNiOtN"
            title="YouTube video player"
            style={{ aspectRatio: "2/1" }}
            className="w-full bg-white my-6"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <h2 className="text-5xl font-bold mt-8 text-gray-600">Interests</h2>
          <p className="text-xl mt-4">
            I&apos;m interested in many things, including:
          </p>
          <ul className="list-disc list-inside text-xl mt-4">
            <li>Web Development</li>
            <li>Competitive Programming</li>
            <li>Computer Science</li>
            <li>Mathematics</li>
            <li>Music theory/composition</li>
            <li>NFL #gohawks</li>
          </ul>
          <h2 className="text-5xl font-bold mt-8 text-gray-600">Contact</h2>
          <p className="text-xl mt-4">
            Feel free to email me at{" "}
            <a
              href="mailto:lockemaximus@gmail.com
              "
              className="text-gray-600 hover:text-gray-700 visited:text-gray-400 font-bold"
            >
              lockemaximus@gmail.com
            </a>{" "}
            and hopefully I will respond within 24 hours.
          </p>
        </div>
      </main>
      <footer className="text-center p-4 md:p-6 lg:p-8 bg-gray-900 text-white text-sm">
        &copy; 2024 Max Locke | All Rights Reserved
      </footer>
    </>
  );
}

function Logo({ src, alt }) {
  return (
    <div className="flex-none mr-4">
      <Image
        className="h-24 w-auto"
        src={src}
        alt={alt}
        width={100}
        height={100}
      />
    </div>
  );
}
