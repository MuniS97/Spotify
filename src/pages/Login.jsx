export default function Login() {
  const VITE_AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;
  const VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const VITE_REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const VITE_RESPONSE_TYPE = import.meta.env.VITE_RESPONSE_TYPE;

  let url = `${VITE_AUTH_ENDPOINT}?client_id=${VITE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}&response_type=${VITE_RESPONSE_TYPE}&scope=playlist-modify-public`;

  return (
    <>
      <section className="flex items-center justify-center w-full h-screen">
        <a href={url}>
          <button>Login with spotify</button>
        </a>
      </section>
    </>
  );
}
