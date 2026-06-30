/* ============================================================
   By Ayvo — GitHub login voor Decap CMS  (Cloudflare Worker)
   ------------------------------------------------------------
   Dit kleine stukje regelt het inloggen, zodat je website op
   GitHub Pages kan blijven staan. Het is gratis en draait onder
   JOUW Cloudflare-account, zodat je geheime sleutel privé blijft.

   Eenmalig instellen — zie CMS-SETUP.md. Kort:
   1. Maak een GitHub OAuth App (krijg je Client ID + Secret).
   2. Maak op cloudflare.com een gratis Worker, plak deze code.
   3. Zet onder Settings → Variables twee SECRETS:
        GITHUB_CLIENT_ID      = <jouw client id>
        GITHUB_CLIENT_SECRET  = <jouw client secret>
   4. De Worker krijgt een adres, bv. https://byayvo-login.<jij>.workers.dev
      Vul dat in admin/config.yml als  base_url.
   ============================================================ */

const GITHUB_AUTHORIZE = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN = 'https://github.com/login/oauth/access_token';

function html(body) {
  return new Response(body, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

// Bericht dat Decap CMS in het login-venster verwacht
function postMsg(status, payload) {
  const content = JSON.stringify(payload);
  return html(`<!doctype html><html><body><script>
    (function () {
      function send(){
        window.opener && window.opener.postMessage(
          'authorization:github:${status}:${content.replace(/</g,'\\u003c')}',
          '*'
        );
      }
      // Decap stuurt eerst een handshake; daarna sturen wij het resultaat
      window.addEventListener('message', send, false);
      send();
    })();
  </script><p>Inloggen verwerkt — je mag dit venster sluiten.</p></body></html>`);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname, searchParams } = url;
    const redirectUri = `${url.origin}/callback`;

    // Stap 1: stuur door naar GitHub om toestemming te vragen
    if (pathname === '/auth') {
      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        redirect_uri: redirectUri,
        scope: searchParams.get('scope') || 'repo,user',
        state: crypto.randomUUID(),
      });
      return Response.redirect(`${GITHUB_AUTHORIZE}?${params}`, 302);
    }

    // Stap 2: GitHub stuurt terug met een code → wissel om voor een token
    if (pathname === '/callback') {
      const code = searchParams.get('code');
      if (!code) return postMsg('error', { message: 'Geen code ontvangen van GitHub.' });
      try {
        const res = await fetch(GITHUB_TOKEN, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code,
            redirect_uri: redirectUri,
          }),
        });
        const data = await res.json();
        if (data.error || !data.access_token) {
          return postMsg('error', { message: data.error_description || 'Inloggen mislukt.' });
        }
        return postMsg('success', { token: data.access_token, provider: 'github' });
      } catch (e) {
        return postMsg('error', { message: 'Onverwachte fout bij inloggen.' });
      }
    }

    // Statuscheck
    return html('<p>By Ayvo login-service draait. Gebruik /auth om in te loggen.</p>');
  },
};
