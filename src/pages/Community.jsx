import { useState } from "react";

function Community() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/community",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email: email
          })
        }
      );


      const data = await response.json();

      setMessage(data.message);

      setEmail("");

    } catch (error) {

      console.error(error);

      setMessage("Something went wrong. Please try again.");

    }
  };


  return (
    <section className="community community-page">

      <div className="community-content">

        <p className="section-label">
          03 — COMMUNITY
        </p>

        <h2>
          KEEP
          <br />
          <span>CREATING.</span>
        </h2>

        <p>
          Get new stories, films and creative inspiration
          delivered straight to your inbox.
        </p>


        <form
          className="newsletter-form"
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <button type="submit">
            JOIN →
          </button>

        </form>


        <small>
          {message || "No spam. Just stories worth watching."}
        </small>

      </div>

    </section>
  );
}

export default Community;