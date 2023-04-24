import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useState } from "react";
import { Main } from "./components/Main";

export const link = () => {
  return [{ title: "Macqy Garcia" }];
};

export default function App() {
  const [isActive, setisActive] = useState(false);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={`${isActive ? "h-screen overflow-hidden" : ""}`}>
        <Main isActive={isActive} setisActive={setisActive} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
