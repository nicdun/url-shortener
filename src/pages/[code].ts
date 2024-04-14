import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({params, redirect}) => {
	const code = params.code;

    const functionsUrl = `${import.meta.env.SB_PROJECT_URL}${import.meta.env.SB_EDGE_FUNCTION_API}`;
    const anonKey = `${import.meta.env.SB_ANON_KEY}`;

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