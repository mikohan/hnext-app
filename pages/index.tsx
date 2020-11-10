import Link from 'next/link';
import React from 'react';
export default function Home() {
  return (
    <React.Fragment>
      <div>
        <div className="CoolClass">
          <div className="container">
            <h1>Some cool stuf</h1>
            <Link href="/nicepage">
              <h2 className="title">Link</h2>
            </Link>
            <style jsx>
              {`
                .coolClass {
                  color: red;
                  display: flex;
                  height: 100vh;
                  justify-content: center;
                }
                .title {
                  font-size: 4rem;
                  color: teal;
                  cursor: pointer;
                  text-decroration: underline;
                  margin-left: 5rem;
                }
                .container {
                  width: 80%;
                }
                .coolClass {
                  background-color: red;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
