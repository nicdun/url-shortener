import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({params, request}) => {
	const formData = await request.formData();
	const url = formData.get('url')?.toString();

  if(!url) {
    return new Response(null, {
      status: 422,
      statusText: 'Error during URL processing'
    });
  }

    try {
        new URL(url);
    } catch (error) {
        console.error(error);
        return new Response(null, {
            status: 500,
            statusText: 'Error during URL processing'
          }); 
    }

    const functionsUrl = `${import.meta.env.SB_PROJECT_URL}${import.meta.env.SB_EDGE_FUNCTION_API}`;
    const anonKey = `${import.meta.env.SB_ANON_KEY}`;
    const data = { url };

    const response = await fetch(`${functionsUrl}`, {
        method: 'POST',
        headers: {'Content-Type':'application/json', 'Authorization': `Bearer ${anonKey}`},
        body: JSON.stringify(data),
    }).then((response) => {
    if (response.status > 300) {
        throw Error("Error during supabase API call");
    }
    return response.json();
    }
  ).catch((error) => {
    console.error(error);
    return new Response(null, {
        status: 500,
        statusText: 'Error during URL processing'
      });
  });

  return new Response(
    JSON.stringify({
      url: response.url
    }),
  )
}

export const GET: APIRoute = async ({params, request, redirect}) => {
	const url = request.url;
  console.log(params);
  const code = 'code';

    const functionsUrl = 'http://127.0.0.1:54321/functions/v1/url-shortener/url';//`${import.meta.env.SB_PROJECT_URL}${import.meta.env.SB_EDGE_FUNCTION_API}`;
    const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';// import.meta.env.SB_ANON_KEY;

    const response = await fetch(`${functionsUrl}/${code}`, {
        method: 'GET',
        headers: {'Content-Type':'application/json', 'Authorization': `Bearer ${anonKey}`},
    }).then((response) => {
    if (response.status > 300) {
        throw Error("Error during supabase API call");
    }
    return response.json();
    }
  ).catch((error) => {
    console.error(error);
    return new Response(null, {
        status: 500,
        statusText: 'Error during URL processing'
      });
  });

  return redirect(response.url, 307);
}