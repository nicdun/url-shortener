import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request }) => {
	const body = await request.json();
	const url = body['url'];

	try {
		new URL(url);
	} catch (error) {
		console.error(error);
		return new Response(null, {
			status: 422,
			statusText: 'Error during URL processing'
		});
	}

	const functionsUrl = `${import.meta.env.SB_PROJECT_URL}${import.meta.env.SB_EDGE_FUNCTION_API}`;
	const anonKey = `${import.meta.env.SB_ANON_KEY}`;
	const data = { url };

	try {
		const response = await fetch(`${functionsUrl}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${anonKey}` },
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
			statusText: 'Error during API call'
		});
	}
};

export const GET: APIRoute = async ({ params, request, redirect }) => {
	const url = request.url;
	console.log(params);
	const code = 'code';

	const functionsUrl = `${import.meta.env.SB_PROJECT_URL}${import.meta.env.SB_EDGE_FUNCTION_API}`;
	const anonKey = `${import.meta.env.SB_ANON_KEY}`;

    try {
      const response = await fetch(`${functionsUrl}/${code}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${anonKey}` }
      });
  
      const result = await response.json();
  
      return redirect(result.url, 307);
    } catch (error) {
      console.error(error);
      return new Response(null, {
        status: 500,
				statusText: 'Error during URL processing'
      });
    }
};
