const GET = async ({ params, redirect }) => {
  const code = params.code;
  const functionsUrl = `${"http://127.0.0.1:54321"}${"/functions/v1/url-shortener/url"}`;
  const anonKey = `${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"}`;
  const response = await fetch(`${functionsUrl}/${code}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${anonKey}` }
  }).then(
    (response2) => {
      if (response2.status > 300) {
        throw Error("Error during supabase API call");
      }
      return response2.json();
    }
  ).catch((error) => {
    console.error(error);
    return new Response(null, {
      status: 500,
      statusText: "Error during URL processing"
    });
  });
  return redirect(response.url, 307);
};

export { GET };
