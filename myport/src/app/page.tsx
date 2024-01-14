import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="flex items-center bg-sky-950 p-2 sm:p-4 md:p-4 lg:p-4 xl:p-6">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <span className="font-semibold text-xl tracking-tight">About Me</span>
        </div>
      </nav>
      <main className="sm:p-2 md:p-4 lg:p-6 xl:p-8 py-0">
        <div className="sidenav p-4 md:p-6 sm:w-1/4 box-border sm:inline-block sm:align-top sm:sticky sm:top-1 -mt-0 sm:-m-2 md:-mt-4 lg:-mt-6 xl:-mt-8 pt-4 sm:pt-4 md:pt-8 lg:pt-12 xl:pt-16 overflow-y-auto">
          <Image
            className="rounded-full max-w-72 w-full"
            src="https://avatars.githubusercontent.com/u/120674735?s=400&u=4397fab867b11ca0beb9f87bf03cac059fee2545&v=4"
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
              13 year old full-stack developer from Bellevue, WA
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
          </div>
        </div>
        <div className="sm:w-3/4  p-4 md:p-6 sm:inline-block box-border">
          <h2 className="text-5xl font-bold mt-4 text-sky-900">About Me</h2>
          <p className="text-xl mt-4">
            Hello, I&apos;m Max Locke, the creator of Subatomic.js, a fullstack
            framework for building web apps. As a 13-year-old fullstack
            developer from Bellevue, WA. I enjoy programming, especially web
            development, along with music theory/composition. I&apos;m
            passionate about learning and am always looking to expand my
            skill-set.
          </p>

          <div className="flex flex-col items-center content-center px-4 md:px-6 lg:px-8 py-10 lg:py-12">
            <blockquote
              className="text-2xl md:text-3xl quote relative"
              style={{
                "font-family": "Georgia, serif",
                "font-style": "italic",
              }}
            >
              If you think you&apos;re done learning how to code, you&apos;re
              doing something wrong.
            </blockquote>
            <cite className="w-full mt-4 text-xl">- Max Locke</cite>
          </div>
          <h1 className="text-5xl font-bold mt-0 text-sky-900">Skills</h1>
          <p className="text-xl mt-4">
            I&apos;m skilled in many areas of web development, including:
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
              src="https://s-softteam.com/wp-content/uploads/2023/07/pngwing.com-6.png"
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
          </div>
          <h2 className="text-5xl font-bold mt-8 text-sky-900">Projects</h2>
          <p className="text-xl mt-4">
            I&apos;ve worked on various projects, and here are some of my
            favorites:
          </p>
          <h3 className="text-3xl font-semibold mt-4">
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
              className="text-blue-600 hover:text-blue-700 visited:text-purple-600"
            >
              GitHub
            </a>
            . I take pride in the transformation of this project, starting from
            a frontend concept and growing into a comprehensive fullstack
            framework with SSR, JSX, and PSR.
          </p>

          <h3 className="text-3xl font-semibold mt-4">
            Coducation,{" "}
            <span className=" text-2xl font-normal italic">
              Learning Platform
            </span>
          </h3>
          <p className="text-xl mt-4">
            Coducation is a collaborative website that I created with{" "}
            <a
              href="https://github.com/Pineappletwo1"
              className="text-blue-600 hover:text-blue-700 visited:text-purple-600"
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
            performance and SEO. You can visit the site at{" "}
            <a
              href="http://home.coducation.tech"
              className="text-blue-600 hover:text-blue-700 visited:text-purple-600"
              target="_blank"
            >
              home.coducation.tech
            </a>
            .
          </p>
          <h3 className="text-3xl font-semibold mt-4">
            Tyee Guides,{" "}
            <span className=" text-2xl font-normal italic">
              Community Portal
            </span>
          </h3>
          <p className="text-xl mt-4">
            Tyee Guides is a website that I created with{" "}
            <a
              href="https://github.com/Pineappletwo1"
              className="text-blue-600 hover:text-blue-700 visited:text-purple-600"
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
              className="text-blue-600 hover:text-blue-700 visited:text-purple-600"
              target="_blank"
            >
              guides.tyeems.me
            </a>
            .
          </p>
          <h3 className="text-3xl font-semibold mt-4">
            Competitive Programming
          </h3>
          <p className="text-xl mt-4">
            I just recently started competitive programming, and I&apos;m
            currently ranked third in the Tyee Programming Competition Club.
            I&apos;ve competed in the ACSL (American Computer Science League)
            but didn&apos;t do too well on the theory end. I was able to solve
            the coding problems well, which is what got me ranked third of the
            club. I&apos;m currently studying more about low-level programming
            and algorithms outside of my web-dev experience.
          </p>
          <h2 className="text-5xl font-bold mt-8 text-sky-900">Interests</h2>
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
          <h2 className="text-5xl font-bold mt-8 text-sky-900">Contact</h2>
          <p className="text-xl mt-4">
            You can contact me at{" "}
            <a
              href="mailto:lockemaximus@gmail.com
              "
              className="text-blue-600 hover:text-blue-700 visited:text-purple-600"
            >
              lockemaximus@gmail.com
            </a>
            .
          </p>
        </div>
      </main>
      <footer className="text-center p-4 md:p-6 lg:p-8 bg-sky-900 text-white text-xl">
        &copy; 2023 Max Locke.
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
