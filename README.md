# Setup Guide

1. Clone the mixchat-shopify repository to local directory

```
$ git clone https://github.com/joeyjackson/ClientCheff.git
$ cd ClientCheff
```

2. Install dependencies (this will take some time)

```
$ npm install
```

3. run development server

```
$ npm run dev
```

4. In a new terminal, install ngrok (secure tunnel to/from local dev) and open on port 3000

```
$ brew cask install ngrok
$ ngrok http 3000
```

5. copy the ngrok https address
6. navigate to Shopify Partner Dashboard: https://partners.shopify.com/1809516/apps?page=1
7. Click on app > mixchat, then navigate to app setup
8. In the URLs section, paste the following:
```
App URL: https://[ngrok url goes here]
Preferences URL (optional): blank
Allowed redirection URL(s): https://[ngrok url goes here]/auth/callback
```
9. If needed, install the app in our test store

```
click the back button
under the test your app section, select add store and choose MixChat-Test store
```

10. Navigate to the apps section of our test store, and click on the mixchat app:
https://mixchat-test.myshopify.com/admin/apps/mixchat
