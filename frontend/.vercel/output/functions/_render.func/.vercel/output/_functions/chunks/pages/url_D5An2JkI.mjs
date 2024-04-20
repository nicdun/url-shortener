const POST = async ({ params, request }) => {
  const body = await request.json();
  const url = body["url"];
  try {
    new URL(url);
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 422,
      statusText: "Error during URL processing"
    });
  }
  const functionsUrl = `${"http://127.0.0.1:54321"}${"/functions/v1/url-shortener/url"}`;
  const anonKey = `${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"}`;
  const data = { url };
  try {
    const response = await fetch(`${functionsUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${anonKey}` },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return new Response(
      JSON.stringify({
        url: result.url
      })
    );
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
      statusText: "Error during API call"
    });
  }
};
const GET = async ({ params, request, redirect }) => {
  request.url;
  console.log(params);
  const code = "code";
  const functionsUrl = `${"http://127.0.0.1:54321"}${"/functions/v1/url-shortener/url"}`;
  const anonKey = `${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"}`;
  try {
    const response = await fetch(`${functionsUrl}/${code}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${anonKey}` }
    });
    const result = await response.json();
    return redirect(result.url, 307);
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
      statusText: "Error during URL processing"
    });
  }
};

export { GET, POST };
