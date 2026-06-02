# Judge My Pass 🎭

A fun, interactive web app that validates answers to philosophical questions and generates humorous roasts for passwords using AI.

## Features

- 🧠 AI-powered CAPTCHA validation using philosophical questions
- 😂 AI-generated password roasts
- 🎨 Interactive UI with playful animations
- 🔐 Secure API key management via environment variables

## Local Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

1. **Clone/download the project**

   ```bash
   cd judgemypass
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file** (copy from `.env.example`)

   ```bash
   cp .env.example .env
   ```

4. **Add your API key**
   - Get a free API key from [Hack Club AI](https://ai.hackclub.com/)
   - Update the `API_KEY` in your `.env` file

5. **Start the server**

   ```bash
   npm start
   ```

6. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment Guides

### Option 1: Heroku (Easiest)

1. **Install Heroku CLI** - https://devcenter.heroku.com/articles/heroku-cli

2. **Login and create app**

   ```bash
   heroku login
   heroku create your-app-name
   ```

3. **Set environment variables**

   ```bash
   heroku config:set API_KEY=sk-hc-v1-your-actual-key
   ```

4. **Deploy**

   ```bash
   git push heroku main
   ```

5. **Open your app**
   ```bash
   heroku open
   ```

### Option 2: Vercel

1. **Create account** - https://vercel.com

2. **Connect your Git repository**

3. **Set environment variables** in project settings
   - Add `API_KEY` variable

4. **Deploy** - automatically when you push to Git

⚠️ **Note**: Vercel has limitations with Node.js serverless. For this project, use Heroku or Railway.

### Option 3: Railway

1. **Create account** - https://railway.app

2. **Connect your GitHub repository**

3. **Add environment variables**
   - `API_KEY` with your Hack Club API key

4. **Deploy** - Railway will automatically detect and run it

### Option 4: Render

1. **Create account** - https://render.com

2. **Create new Web Service**

3. **Connect your repository**

4. **Configure:**
   - Runtime: Node
   - Build: `npm install`
   - Start: `npm start`

5. **Add environment variable:**
   - `API_KEY` = your Hack Club API key

6. **Deploy**

### Option 5: DigitalOcean App Platform

1. **Create account** - https://www.digitalocean.com

2. **Create new App**

3. **Connect Git repository**

4. **Configure:**
   - Set HTTP port to 3000
   - Add environment variable `API_KEY`

5. **Deploy**

## Important Considerations

### 🔐 Security

- ✅ **Never commit `.env` file** - it's in `.gitignore`
- ✅ **Set API_KEY via hosting platform's environment variables**
- ✅ **Use `.env.example` as template** for configuration

### ⚡ Performance

- The app is lightweight and will run on free/cheap hosting tiers
- AI API responses may take 2-5 seconds

### 📊 Supported Hosting

| Platform     | Free Tier     | Limitations                   | Best For                     |
| ------------ | ------------- | ----------------------------- | ---------------------------- |
| Heroku       | Yes (limited) | Hobby dyno sleeps after 30min | Testing/Small projects       |
| Railway      | $5 credit     | Credit-based                  | Production                   |
| Render       | Yes           | Cold starts                   | Hobby projects               |
| Vercel       | Yes           | Node limitations              | Not recommended for this app |
| DigitalOcean | No            | Pay-as-you-go                 | Small production apps        |

### 🐛 Troubleshooting

**"API_KEY not configured" error:**

- Make sure you set the `API_KEY` environment variable in your hosting platform
- Check that the API key is valid

**"Cannot find module" error:**

- Run `npm install` before deploying
- Make sure `package.json` is committed to Git

**Port errors:**

- The app automatically uses the `PORT` environment variable if set
- Most hosting platforms set this automatically

## Project Structure

```
judgemypass/
├── server.js              # Express server with API endpoints
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (DO NOT commit)
├── .env.example           # Template for .env
├── .gitignore             # Git ignore rules
├── Procfile              # Heroku deployment config
└── public/               # Static files
    ├── index.html        # Main page
    ├── script.js         # Frontend logic
    ├── style.css         # Styles
    └── images/
        └── einstein.jpg  # CAPTCHA image
```

## Environment Variables

| Variable  | Required | Default | Description          |
| --------- | -------- | ------- | -------------------- |
| `API_KEY` | Yes      | None    | Hack Club AI API key |
| `PORT`    | No       | 3000    | Server port          |

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **AI**: Hack Club AI Proxy (Qwen 3-32B)
- **Hosting**: Platform-agnostic (works on any Node.js hosting)

## License

ISC

## Support

Having issues? Check:

1. Is `API_KEY` set correctly?
2. Are you using Node.js 16+?
3. Try running locally first to debug

---

**Ready to deploy?** Choose your hosting platform above and follow the guide! 🚀
