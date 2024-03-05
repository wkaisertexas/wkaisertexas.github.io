import React, { useState, useRef } from "react";

const SUGGESTIONS = [
  "I like programming and am interested in joining a club",
  "What clubs exists that are community service oriented?",
  "I want to join a club that is focused on the environment",
  "What clubs are there that are focused on the arts?",
];

const CLUBS_URL = "https://us-central1-uvagpt.cloudfunctions.net/search_clubs";

type Club = {
  categories: string[];
  description: string;
  memberCount: number;
  name: string;
  newOrg: boolean;
  photoType: string;
  photoUri: string;
  regularMeetingLocation: string;
  regularMeetingTime: string;
  uri: string;
};

const toPhoto = (photoUri: string) : string => (`https://virginia-cdn.presence.io/organization-photos/cea28f2b-baa9-4c47-8879-da8d675e4471/${photoUri}`);
const toURL = (uri: string) : string => (`https://virginia.presence.io/organization/${uri}`);

const ClubResult = (props: { club: Club }) => <p>
  <a href={toURL(props.club.uri)}>{props.club.name}</a>
  <img src={toPhoto(props.club.photoUri)} alt={props.club.name} />
  <p>{props.club.description}</p>
  <p>{props.club.categories.join(", ")}</p>
  <p>{props.club.memberCount} members</p>
  <p>{props.club.regularMeetingLocation}</p>
  <p>{props.club.regularMeetingTime}</p>
</p>;

const SearchClubs = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const searchBar = useRef<HTMLInputElement>();

  const searchClubs = async (query: string) => {
    if (query.length === 0) return;

    let data = fetch(CLUBS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ query: query }),
    });

    let clubs: Club[] = await data.json();

    setClubs(clubs);
  };

  const searchByButtonPress = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    searchClubs(searchBar.current.value);
  };

  const searchByOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchClubs(searchBar.current.value);
  };

  return (
    <div className="not-prose">
      <header>
        <h1>UVA Club Finder</h1>
        <p>Search for clubs semantically</p>
      </header>

      <form onSubmit={searchByOnSubmit}>
        <input ref={searchBar} type="text" placeholder="Search for a club" />
        <button
          className="ui-btn ui-btn-primary"
          onClick={searchByButtonPress}
          type="submit"
        >
          Search
        </button>

        <ul>
          {SUGGESTIONS.map((suggestion, i) => (
            <li key={i}>{suggestion}</li>
          ))}
        </ul>
      </form>

      <ol>
        {clubs.length > 0 ? (
          clubs.map((club, i) => (
            <li key={i}>
              <ClubResult club={club} />
            </li>
          ))
        ) : (
          <>Search for clubs</>
        )}
      </ol>
    </div>
  );
};

export default SearchClubs;
