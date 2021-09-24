import Head from 'next/head'

export default function Index() {
  return (
    <div className="mustakirja">
      <Head>
        <title>Mustakirja</title>
        <meta name='application-name' content='Mustakirja' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Mustakirja' />
        <meta name='description' content='Mustakirja' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#fa3b54' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#fa3b54' />

        <link rel='apple-touch-icon' href='/icon.jpg' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icon.jpg' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icon.jpg' />
        <link rel='apple-touch-icon' sizes='167x167' href='/icon.jpg' />

        <link rel='icon' type='image/jpg' sizes='32x32' href='/icon.jpg' />
        <link rel='icon' type='image/jpg' sizes='16x16' href='/icon.jpg' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/icon.jpg' />
     
      </Head>
      <canvas></canvas>  
      <script src="/canvas.js"></script>
    </div>
  )
}