<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <title><xsl:value-of select="/rss/channel/title"/> — RSS</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <style>
          :root { color-scheme: dark; }
          body { background:#0b0d10; color:#e6e8eb; font-family:-apple-system,Inter,system-ui,sans-serif; max-width:720px; margin:0 auto; padding:48px 24px; line-height:1.6; }
          a { color:#6ee7b7; }
          h1 { font-size:32px; letter-spacing:-1px; }
          .desc { color:#9aa1a9; }
          .item { padding:24px 0; border-top:1px solid #23272d; }
          .item h2 { font-size:20px; margin:0 0 6px; }
          .item time { color:#9aa1a9; font-size:13px; }
          .info { background:#13161a; border:1px solid #23272d; border-radius:8px; padding:16px 20px; margin:24px 0; font-size:14px; color:#9aa1a9; }
          code { background:#13161a; padding:2px 6px; border-radius:4px; font-family:JetBrains Mono,monospace; font-size:13px; }
        </style>
      </head>
      <body>
        <p><a href="/">← Remediate Labs</a></p>
        <h1><xsl:value-of select="/rss/channel/title"/></h1>
        <p class="desc"><xsl:value-of select="/rss/channel/description"/></p>
        <div class="info">
          This is an RSS feed. Paste <code><xsl:value-of select="/rss/channel/link"/>rss.xml</code> into your reader of choice (NetNewsWire, Feedly, Reeder, etc.).
        </div>
        <xsl:for-each select="/rss/channel/item">
          <div class="item">
            <h2><a><xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute><xsl:value-of select="title"/></a></h2>
            <time><xsl:value-of select="pubDate"/></time>
            <p><xsl:value-of select="description"/></p>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
