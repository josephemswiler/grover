import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html lang='en'>
        <Head>
          {/* content is UTF-8 encoded */}
          <meta charSet='utf-8' />

          {/* set page width to screen width, set initial zoom */}
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />

          {/* tell google to not show translate modals */}
          <meta name='google' content='notranslate' />

          {/* specify color of browser on mobile device */}
          <meta name='theme-color' content='#1976D2' />

          {/* google fonts */}
          <link
            href='https://fonts.googleapis.com/css?family=Montserrat:300,400,900'
            rel='stylesheet'
          />

          {/* material icons */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />

          {/* NProgress bar */}
          <link
            rel='stylesheet'
            href='https://storage.googleapis.com/builderbook/nprogress.min.css'
          />

          {/* markdown highlighting */}
          <link
            rel='stylesheet'
            href='https://storage.googleapis.com/builderbook/vs.min.css'
          />

          <style>
            {`
                a, a:focus {
                    font-weight: 400;
                    color: #1565C0;
                    text-decoration: none;
                    outline: none
                }
                a:hover, button:hover {
                    opacity: 0.75;
                    cursor: pointer
                }
                blockquote {
                    padding: 0 1em;
                    color: #555;
                    border-left: 0.25em solid #dfe2e5;
                }
                pre {
                    display:block;
                    overflow-x:auto;
                    padding:0.5em;
                    background:#FFF;
                    color: #000;
                    border: 1px solid #ddd;
                }
                code {
                    font-size: 14px;
                    background: #FFF;
                    padding: 3px 5px;
                }
                `}
          </style>
        </Head>
        <body
          style={{
            font: '14px Montserrat',
            color: '#222',
            margin: '0px auto',
            fontWeight: '300',
            lineHeight: '1.5em',
            backgroundColor: '#F7F9FC'
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
