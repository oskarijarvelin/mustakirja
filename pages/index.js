import Head from 'next/head'

export default function Index() {
  return (
    <div className="mustakirja">
      <Head>
        <title>Mustakirja</title>
        <meta name='application-name' content='1' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='2' />
        <meta name='description' content='Mustakirja' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#0b0c06' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#0b0c06' />

        <link rel='apple-touch-icon' href='/icon.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icon.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icon.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='/icon.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='/icon.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/icon.png' />
     
      </Head>
      <canvas></canvas>  
      <script src="/canvas.js"></script>
    </div>
  )
}