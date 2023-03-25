import Link from "next/link";
import React, { useState } from "react";

export default function About() {
  const [modal, setModal] = useState(false);
  console.log(modal);
  // const handleEmailClick = () => {
  //   console.log(modal);
  //   navigator.clipboard.writeText("luce.paly@gmail.com");
  //   return setModal(true);
  // };

  return (
    <>
      <div className="flex flex-col items-center justify-between m-8">
        <div className="w-10/12">
          <p>
            Our Pokemon trivia web game uses modern web technologies to deliver
            a fast, responsive, and engaging user experience. Next.js allows us
            to create server-side rendered pages and provides optimization
            features like code splitting and automatic prefetching. Prisma
            simplifies database interactions with its type-safe queries,
            automatic migrations, and schema designer, while Planetscale&apos;s
            distributed database technology guarantees high availability. React
            Query streamlines API calls with its simple and flexible API, and
            NESS.css and Tailwind provide modern and efficient styling options.
          </p>
          <p>
            By prioritizing efficient data management, fast load times, and
            elegant design, our Pokemon trivia web game ensures an enjoyable
            experience for players.
          </p>
          <section className="w-full flex-wrap flex justify-around my-8">
            <a href="https://nextjs.org" className="nes-badge">
              <span className="is-dark">Next.js</span>
            </a>
            <a
              href="https://nostalgic-css.github.io/NES.css/"
              className="nes-badge"
            >
              <span className="is-success">NES.css</span>
            </a>
            <a href="https://react-query-v3.tanstack.com" className="nes-badge">
              <span className="is-error">React Query</span>
            </a>
            <a href="https://www.prisma.io" className="nes-badge">
              <span className="is-primary">Prisma</span>
            </a>
            <a href="https://planetscale.com" className="nes-badge">
              <span className="is-dark">Planetscale</span>
            </a>
          </section>
        </div>
        <div className="nes-container is-dark w-10/12 mt-8">
          <p>
            Hey there! I&apos;m a young web developer from Argentina who is
            passionate about building awesome web applications that people love
            to use. While I don&apos;t have much professional experience yet,
            I&apos;m a fast learner and always eager to improve my skills. I
            believe in the importance of agile development practices and being
            adaptable to new challenges. I&apos;m a team player and value
            collaboration to achieve great results. I hope you enjoy playing my
            Pokemon trivia game as much as I enjoyed building it!
          </p>
          <p>
            If you have any questions or just want to say hello, feel free to
            get in touch with me using the buttons below. I&apos;d love to
            connect with you and hear your feedback!
          </p>
          <section className="w-full flex justify-around my-8">
            <i
              className="nes-icon is-large gmail nes-pointer"
              onClick={() => setModal(true)}
            />
            <Link
              target="_blank"
              href={"https://github.com/PalyLucero"}
              rel="noopener noreferrer"
            >
              <i className="nes-icon is-large github" />
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/PalyLucero/guess-pokemon"}
              rel="noopener noreferrer"
            >
              <i className="nes-icon is-large linkedin" />
            </Link>
          </section>
        </div>
      </div>
      {modal ? (
        <div className="justify-center items-center w-1/2 h-min flex fixed p-4 inset-x-1/4 top-8">
          <div className="bg-slate-100 h-min w-min p-2">
            <div className="nes-container bg-slate-100 flex flex-col relative w-auto max-w-sm items-center">
              <p>&quot;luce.paly@gmail.com&quot;</p>
              <p>Copied to clipboard</p>
              <button
                className="nes-btn is-error w-1/3"
                onClick={() => setModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
