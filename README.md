# Judge My Password

Here you can test your password and see what AI thinks about it. You will learn some philosophy here too

## Features

-  AI-powered CAPTCHA validation using philosophical questions
-  AI-generated password roasts


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


