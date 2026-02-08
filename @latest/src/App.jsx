import { Routes, Route } from "react-router-dom";
import Home from "./app/Home";
import ShowDetail from "./app/ShowDetail";
import Favourites from "./app/Favourites";



/**
 * Root component of the Podcast Explorer app.
 *
 * - Wraps the application in the `PodcastProvider` context for global state.
 * - Includes the `Header` component, displayed on all pages.
 * - Defines client-side routes using React Router:
 *    - "/" renders the `Home` page
 *    - "/show/:id" renders the `ShowDetail` page for a specific podcast
 *
 * @returns {JSX.Element} The application component with routing and context.
 */
export default function App() {
  return (
    <>
     
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/show/:id`} element={<ShowDetail />} />
            <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <AudioPlayer /> 
   
    </>
  );

}